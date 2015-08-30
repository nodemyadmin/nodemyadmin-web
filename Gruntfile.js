module.exports = function(grunt) {
    'use strict';

    /**
     * Setup configuration
     */
    grunt.initConfig({
        serve: grunt.file.readJSON('./configs/serve.files.json'),
        product: grunt.file.readJSON('package.json'),
        clean: {
            build: ['<%= serve.build.dir %>']
        },
        jsonlint: {
            files: {
                src: '<%= serve.lint.json.files %>'
            }
        },
        jshint: {
            options: {
                jshintrc: '<%= serve.lint.js.rules %>',
                ignores: '<%= serve.lint.js.ignore %>'
            },
            all: '<%= serve.lint.js.files %>'
        },
        jscs: {
            options: {
                config: '<%= serve.lint.jscs.rules %>'
            },
            src: '<%= serve.lint.jscs.files %>',
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: '<%= serve.lint.css.rules %>',
                    ignores: '<%= serve.lint.css.ignore %>'
                },
                src: '<%= serve.lint.css.files %>'
            }
        },
        htmlhint: {
            gateway: {
                options: {
                    htmlhintrc: '<%= serve.lint.html.gateway.rules %>',
                    ignores: '<%= serve.lint.html.gateway.ignore %>'
                },
                src: '<%= serve.lint.html.gateway.files %>'
            },
            templates: {
                options: {
                    htmlhintrc: '<%= serve.lint.html.templates.rules %>',
                    ignores: '<%= serve.lint.html.templates.ignore %>'
                },
                src: '<%= serve.lint.html.templates.files %>'
            }
        },
        less: {
            dev: {
                options: '<%= serve.compile.less.dev.options %>',
                files: '<%= serve.compile.less.dev.files %>'
            },
            prod: {
                options: '<%= serve.compile.less.prod.options %>',
                files: '<%= serve.compile.less.prod.files %>'
            }
        },
        watch: {
            less: {
                options: '<%= serve.compile.watch.less.options %>',
                files: '<%= serve.compile.less.dev.files %>',
                tasks: ['less:dev']
            }
        },
        htmlmin: {
            dist: {
                options: '<%= serve.build.html.options %>',
                files: '<%= serve.build.html.files %>'
            }
        },
        browserify: {
            dist: {
                files: {
                    '<%= serve.build.browserify.files.dest %>': ['<%= serve.build.browserify.files.src %>']
                }
            }
        },
        uglify: {
            options: '<%= serve.build.uglify.options %>',
            my_target: {
                files: {
                    '<%= serve.build.uglify.files.dest %>': ['<%= serve.build.uglify.files.src %>']
                }
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /**
     * `default` task performs all types of linting & less compilation for development purpose.
     */
    grunt.registerTask('default', [
        'htmlhint',
        'jsonlint',
        'jshint',
        'jscs',
        'lessdev',
        'csslint'
    ]);

    /**
     * `build` task performs all types of linting & less compilation for production purpose.
     */
    grunt.registerTask('build', [
        'htmlhint',
        'jsonlint',
        'jshint',
        'jscs',
        'lessprod',
        'csslint',
        'clean',
        'browserify',
        'uglify',
        'htmlmin'
    ]);

    /**
     * `lessdev` task perform less compilation for development purpose.
     */
    grunt.registerTask('lessdev', ['less:dev']);

    /**
     * `lessprod` task perform less compilation for production purpose.
     */
    grunt.registerTask('lessprod', ['less:prod']);

    /**
     * `lintjs` task perform all types of JavaScript linting.
     */
    grunt.registerTask('lintjs', ['jsonlint', 'jshint', 'jscs']);

    /**
     * `lintcss` task perform all types of CSS linting.
     */
    grunt.registerTask('lintcss', ['lessdev', 'csslint']);

};