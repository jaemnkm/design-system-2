/*jshint node:true, esversion: 6 */
"use strict";

const gulp = require("gulp");
const bourbon = require("bourbon").includePaths;
const browserify = require("browserify");
const browserSync = require("browser-sync").create();
const buffer = require("vinyl-buffer");
const concat = require("gulp-concat");
const cp = require("child_process");
const cssnano = require("cssnano");
const csswring = require("csswring");
const del = require("del");
const log = require("fancy-log");
const ghpages = require("gulp-gh-pages");
const gulpStylelint = require("gulp-stylelint");
const { formatters } = require("stylelint");
const jshint = require("gulp-jshint");
const neat = require("bourbon-neat").includePaths;
const packCSS = require("css-mqpacker");
const postcss = require("gulp-postcss");
const prefix = require("autoprefixer");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const source = require("vinyl-source-stream");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

// gulp-sass uses node-sass by default but strongly recommends we set
// it explicitly for forwards-compatibility in case the default ever changes.
sass.compiler = require("node-sass");

const IGNORE_STRING = "This file is ignored";
const ignoreStylelintIgnoreWarnings = lintResults =>
  formatters.string(
    lintResults.reduce((memo, result) => {
      const { warnings } = result;
      const fileIsIgnored = warnings.some(warning => {
        return RegExp(IGNORE_STRING, "i").test(warning.text);
      });

      if (!fileIsIgnored) {
        memo.push(result);
      }

      return memo;
    }, [])
  );

const env = process.env.NODE_ENV || "prod";

const messages = {
  jekyllBuild: "Running:jekyll build"
};

var paths = {
  styles: {
    watch: "_scss/**/*.scss",
    dest: "_site/css",
    destsecond: "css",
    src: [
      "_scss/all.scss",
      "_scss/components.scss",
      "_scss/components-joa.scss",
      "_scss/help-center.scss",
      "_scss/open-opps.scss",
      "_scss/layouts/*.scss"
    ]
  },
  scripts: {
    src: "js/*.js",
    dest: "_site/js",
    jshintSrc: [
      "gulpfile.js",
      "js/**/*.js",
      "!js/vendor/*.js",
      "!js/usajobs-design-system-base.js",
      "!js/usajobs-design-system-components.js",
      "!js/usajobs-design-system-documentation.js"
    ],
    concatBaseSrc: [
      "js/vendor/modernizr.js",
      "node_modules/jquery/dist/jquery.min.js",
      "js/vendor/jquery.ba-throttle-debounce.min.js",
      "js/vendor/jquery-ui.min.js",
      "js/vendor/select2.min.js",
      "node_modules/readmore-js/readmore.js",
      "js/vendor/fontawesome-all.min.js",
      "js/vendor/fa-v4-shims.min.js",
      "js/base.js"
    ],
    concatComponents: "js/components/*.js",
    concatDocsSrc: ["js/vendor/prism.js", "js/vendor/uswds-styleguide.js"],
    compiledSrc: [
      "js/usajobs-design-system-base.js",
      "js/usajobs-design-system-components.js",
      "js/usajobs-design-system-documentation.js"
    ],
    entryPoint: "node_modules/uswds/src/js/start.js"
  }
};

var options = {
  browserifyParams: {
    entries: paths.scripts.entryPoints,
    external: ["jquery"],
    transform: [["babelify", { presets: ["es2015"], global: true }]],
    debug: true
  }
};

function jekyllBuild() {
  browserSync.notify(messages.jekyllBuild);
  log("Running jekyllBuild");

  if (env === "prod") {
    log("Building for production");
    return cp.spawn("bundle", ["exec", "jekyll", "build"], {
      stdio: "inherit"
    });
  } else {
    log("Building for development");
    return cp.spawn(
      "bundle",
      ["exec", "jekyll", "build", "--config", "_config.yml,_config-dev.yml"],
      {
        stdio: "inherit"
      }
    );
  }
}

function cssBuild() {
  const processors = [
    prefix({ browsers: ["> 5%", "last 3 versions"] }),
    packCSS({ sort: true }),
    csswring,
    cssnano
  ];

  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: [
          "node_modules/uswds/src/stylesheets/",
          "node_modules/uswds/src/stylesheets/lib/",
          "_scss/"
        ],
        outputStyle: "expanded",
        onError: browserSync.notify
      })
    )
    .pipe(postcss(processors))
    .pipe(rename({ prefix: "usajobs-design-system-" }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.destsecond));
}

gulp.task("buildCSS", gulp.series(cssBuild));

function reload(done) {
  browserSync.reload();
  done();
}

function browserSyncServe() {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  });
}

function watch() {
  gulp.watch(paths.styles.watch, cssBuild);
  gulp.watch(
    [
      "*.html",
      "_layouts/*.html",
      "_page-layouts/*.html",
      "pages/*",
      "_data/*",
      "_includes/*",
      "js/*.js",
      "img/*.*"
      // './**/*.md' // causes infinite loop
    ],
    gulp.series(jekyllBuild, reload)
  );
}

/**
 * Delete .publish directory
 */
gulp.task("clean", () => del(".publish/**/*"));

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task("jekyll-rebuild", gulp.series(jekyllBuild, reload));

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 * To run locally:
 * $ NODE_ENV=dev gulp
 * or use `npm start`
 */
gulp.task("default", gulp.parallel(jekyllBuild, browserSyncServe, watch));
// gulp.task("default", ["clean", "build", "css", "js", "test"]);

/**
 * Deploy to GitHub Pages
 */
function deploy() {
  return gulp.src("./_site/**/*").pipe(ghpages());
}

gulp.task("deploy", gulp.series(jekyllBuild, gulp.parallel(deploy)));

// JS
function jsHint() {
  return gulp
    .src(paths.scripts.jshintSrc)
    .pipe(jshint())
    .pipe(jshint.reporter(require("jshint-stylish")));
}

function browserifyComponentJS() {
  var defaultStream = browserify(options.browserifyParams);

  // .pipe(source("js/base.js"))
  var stream = defaultStream
    .bundle()
    .pipe(source(paths.scripts.entryPoint))
    .pipe(buffer())
    .pipe(rename({ basename: "usajobs-design-system-" }))
    .pipe(gulp.dest("js"));

  stream.pipe(sourcemaps.init({ loadMaps: true }));

  if (process.env.NODE_ENV !== "dev") {
    stream.pipe(uglify());
  }

  stream
    .on("error", log.error)
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("js"));

  return stream;
}

function browserifyLite() {
  var bundler = browserify(options.browserifyParams);

  return bundler
    .bundle()
    .on("error", function(err) {
      log.error(err);
      this.emit("end");
    })
    .pipe(source(paths.scripts.entryPoint))
    .pipe(buffer())
    .pipe(rename("uswds-components.js"))
    .pipe(gulp.dest("./js"));
}

function concatBase() {
  return gulp
    .src(paths.scripts.concatBaseSrc)
    .pipe(concat("usajobs-design-system-base.js"))
    .pipe(gulp.dest("./js"));
}

function concatComponents() {
  return gulp
    .src(paths.scripts.concatComponents)
    .pipe(concat("usajobs-design-system-components.js"))
    .pipe(gulp.dest("./js"));
}

function concatDocs() {
  return gulp
    .src(paths.scripts.concatDocsSrc)
    .pipe(concat("usajobs-design-system-documentation.js"))
    .pipe(gulp.dest("./js"));
}

function copyJS() {
  return gulp
    .src(paths.scripts.compiledSrc)
    .pipe(gulp.dest(paths.scripts.dest));
}

function jsBuild() {
  jsHint();
  browserifyComponentJS();
  concatBase();
  concatComponents();
  concatDocs();
  copyJS();
}

gulp.task(
  "buildJS",
  gulp.series(
    jsHint,
    gulp.parallel(browserifyLite, concatBase, concatComponents, concatDocs),
    copyJS
  )
);

// BUILD
gulp.task("build", gulp.series(jekyllBuild, cssBuild, jsBuild));

// TEST
function scssLint() {
  return gulp
    .src(paths.styles.watch)
    .pipe(
      gulpStylelint({
        failAfterError: true,
        reporters: [
          {
            formatter: ignoreStylelintIgnoreWarnings,
            console: true
          }
        ],
        syntax: "scss"
      })
    )
    .on("error", function(err) {
      log.error(err);
      this.emit("end");
    });
}

gulp.task("testCSS", gulp.series(scssLint));

// CSS for dev team
// Keeping this around for Saleim and co.
gulp.task("buildcssfromsass", function() {
  gulp
    .src("./node_modules/usajobs-design-system/_scss/all.scss")
    .pipe(
      sass({
        includePaths: [
          bourbon,
          neat,
          "./node_modules/uswds/src/stylesheets/",
          "./node_modules/uswds/src/stylesheets/lib/",
          "./node_modules/usajobs-design-system/_scss/"
        ]
      }).on("error", sass.logError)
    )
    .pipe(rename("usajobs-design-system-base.css"))
    .pipe(gulp.dest("./Content/usaj-design-system/css"));

  gulp
    .src("./node_modules/usajobs-design-system/_scss/components.scss")
    .pipe(
      sass({
        includePaths: [
          bourbon,
          neat,
          "./node_modules/uswds/src/stylesheets/",
          "./node_modules/uswds/src/stylesheets/lib/",
          "./node_modules/usajobs-design-system/_scss/"
        ]
      }).on("error", sass.logError)
    )
    .pipe(rename("usajobs-design-system-components.css"))
    .pipe(gulp.dest("./Content/usaj-design-system/css"));
});
