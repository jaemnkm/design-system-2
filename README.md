# USAJOBS Design System

This repository houses the design system for the next generation of USAJOBS. A design system describes the base visual language, using UI elements and style guidelines, upon which the site can be built. It will also include examples and usage guidelines of new components.

The USAJOBS design system starts with the The [U.S. Web Design Standards](https://playbook.cio.gov/designstandards) and extends them to meet the needs of the USAJOBS next generation project. This repo allows the team working on USAJOBS to:

1. Document where we have intentionally deviated from an existing guildeline in the U.S. Web Design Standards and provide a platform for contributing back to those standards.

2. Document where we have unintentionally deviated from an existing guideline in the U.S. Web Design Standards and want to track getting back inline with the standards.

3. Design new components or elements that are not yet a part of the U.S. Web Design Standards. These components or elements may or may not be appropriate to contribute back to the standards given their potential for reuse elsewhere.

## Setup for your local environment

### Requirements

This repo uses [Jekyll](https://jekyllrb.com/) to serve and build the markup of the site. CSS and JS are managed by [Grunt](http://gruntjs.com/).

Thus you will need [Ruby](https://www.ruby-lang.org) ( > version 2.2.3 ) and [Node](https://nodejs.org/en/download/) ( > 4.1.2 ). The Node install will also provide npm, the Node package manager.

You may consider using a Ruby version manager such as
[rbenv](https://github.com/sstephenson/rbenv) or [rvm](https://rvm.io/) to
help ensure that Ruby version upgrades don't mean all your
[gems](https://rubygems.org/) will need to be rebuilt.

### Installation

Now that you have verified that you have Ruby and Node installed, run the following commands to install the packages that the design system depends upon:

```shell
$ npm install
```

The post-install step should run bundle install.

### Development

To view and work on the site run:

```shell
$ npm start
```

This will perform the necessary Jekyll build, generate concatenated CSS and JS files, serve the site, and watch for changes to Sass and JS files. You should now be able to visit `http://127.0.0.1:4000/` and view the design system locally.

Questions or need help with setup? Feel free to open an issue here [https://github.com/USAJOBS/design-system/issues](https://github.com/USAJOBS/design-system/issues).

### How to use this repo in projects

We will create a new repo for each project that will incrementally redesign a portion of the USAJOBS site. Those project repos will include this repo as a git submodule. This allows the project to simply pull in new changes as they appear.

#### How to submodule this repo

From the top level of your project repo:

1. `git submodule add git@github.com:USAJOBS/design-system.git library`
2. `git commit`

#### IMPORTANT: Don't make changes to the library in your project!

Unfortunately, submodules don't allow for making changes to the submodule from within          another repo. Thus you must not make changes in the submodule. Git will discard your           changes and it may cause conflicts in your project. Do NOT make changes in the submodule!

#### Picking up changes to this repo from your project

From the top level of your project repo:

1. `cd library`
2. `git pull`
3. `git commit`

## Feedback

Please create a [GitHub Issue](https://github.com/USAJOBS/design-system/issues).

## Contributing to the code base

See [CONTRIBUTING](CONTRIBUTING.md).

## Licenses and attribution

Please refer to the [LICENSE](LICENSE.md) page.
