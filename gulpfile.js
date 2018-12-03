var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var concat = require('gulp-concat');
var cssnano = require("gulp-cssnano");
var sh = require("gulp-sh");
var jshint = require("gulp-jshint");
var browserify = require("browserify");
var scsslint = require('gulp-scss-lint');

var options = {
  sassInputLocationGlob: "_scss/**/*.scss",
  cssOutputLocation: "./_site/css",
  jsOutputLocation: "./_site/js",
  sassSourcemapsOutputLocation: "sourcemaps", // TODO: I made this up. You may have to find where it's searching for the maps and output them there
  nodeSassOptions: {
    // Per the gulp readme at https://github.com/dlmanning/gulp-sass#readme,
    // These will be passed along directly. Options reference at https://github.com/sass/node-sass#options
    outputStyle: "expanded",
    includePaths: [
      "node_modules/uswds/src/stylesheets",
      "node_modules/uswds/src/stylesheets/lib/"
    ]
  },
  logConcurrentOutput: true,
  jshintSrc: [
    "gulp.js",
    "js/**/*.js",
    "!js/vendor/*.js",
    "!js/usajobs-design-system-base.js",
    "!js/usajobs-design-system-components.js",
    "!js/usajobs-design-system-documentation.js"
  ],
  browserifyParams: {
    external: ['jquery'],
    transform: [['babelify', { 'presets': ['es2015'], 'global' : true }]],
    debug: true
  },
  concatBaseSrc: [
    'js/vendor/modernizr.js',
    'node_modules/jquery/dist/jquery.min.js',
    'js/vendor/jquery.ba-throttle-debounce.min.js',
    'js/vendor/jquery-ui.min.js',
    'js/vendor/select2.min.js',
    'node_modules/readmore-js/readmore.js',
    'js/vendor/fontawesome-all.min.js',
    'js/vendor/fa-v4-shims.min.js',
    'js/base.js'
  ],
  concatDocsSrc: [
    'js/vendor/prism.js',
    'js/vendor/uswds-styleguide.js'
  ]
};

gulp.task("default", ["clean", "serve", "build", "css", "js", "test"]);

// CLEAN
gulp.task("clean", ["clean-js", "clean-css"]);

gulp.task("clean-js", function () {
  return del([options.jsOutputLocation]);
});

gulp.task("clean-css", function () {
  return del([options.cssOutputLocation, options.sassSourcemapsOutputLocation]);
});

// SERVE
gulp.task("serve", sh `bundle exec jekyll serve --baseurl ''`);

// BUILD
gulp.task("build", ["jekyll-build", "css", "js"]);

gulp.task("jekyll-build", sh `bundle exec jekyll build`);

// CSS
gulp.task("css", ["sass", "autoprefixer", "css-min"]);

gulp.task("sass", ["clean-css"], function () {
  return gulp
    .src(options.sassInputLocationGlob)
    .pipe(sourcemaps.init())
    .pipe(sass(options.nodeSassOptions).on("error", sass.logError))
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation));
});

gulp.task("autoprefixer", ["sass"], function () {
  return gulp
    .src(options.cssOutputLocation + "**/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: ["last 3 versions", "> 2% in US"]
      })
    )
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation));
});

gulp.task("css-min", ["autoprefixer"], function () {
  return gulp
    .src(options.cssOutputLocation + "**/*.css")
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation));
});

// JS
gulp.task("js", ["jshint", "browserify", "concat_base", "concat_docs"]);

gulp.task("jshint", function () {
  return gulp
    .src(options.jshintSrc)
    .pipe(jshint())
    .pipe(jshint.reporter(require("jshint-stylish")));
});

gulp.task("browserify", function() {
  browserify(options.browserifyParams)
  return gulp
    .src(['node_modules/uswds/src/js/start.js','js/components/*.js']);
});

gulp.task("concat_base", function () {
  return gulp.src(options.concatBaseSrc)
    .pipe(concat('all.js'));
});

gulp.task("concat_docs", function() {
  return gulp.src(options.concatDocsSrc)
  .pipe(concat('all.js'));
})

// TEST
gulp.task("test", ["jshint", "scsslint"]);

gulp.task("scsslint", function(){
  return gulp.src('/scss/*.scss')
    .pipe(scsslint());
});

gulp.task("watch-sass", function () {
  gulp.watch(options.sassInputLocationGlob, ["sass"]);
});



