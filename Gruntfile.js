module.exports = function(grunt) {
    'use strict';

    /**
     * Require it at the top and pass in the grunt instance
     */
    require('time-grunt')(grunt);

    /**
     * Setup configuration
     */
    grunt.initConfig({
        serve: grunt.file.readJSON('client/config/servefiles.json'),
        program: grunt.file.readJSON('package.json'),
        buildTags: "/* Project Name : <%= program.name %> , Release version : <%= program.version %> */",
        clean: {
            build: ['client/prod']
        },
        usebanner: {
            buildTags: {
                options: {
                    position: 'top',
                    banner: '<%= buildTags %>',
                    linebreak: true
                }
            }
        },
        jsonlint: {
            files: {
                src: '<%= serve.jsonlint %>'
            }
        },
        shell: {
            uglify: {
                command: [
                    'node client/config/r.js -o client/config/build/optimize-build.js',
                    'node client/config/r.js -o client/config/build/copy-build.js',
                    'rm client/main-optimize.js',
                    'rm client/prod/main.js',
                    'mv client/prod/main-optimize.js client/prod/main.js'
                ].join('&&')
            }
        },
        jshint: {
            options: {
                jshintrc: 'client/config/lints/.jshintrc',
                ignores: '<%= serve.jshint.ignore %>'
            },
            all: '<%= serve.jshint.files %>'
        },
        jscs: {
            options: {
                config: 'client/config/lints/.jscsrc'
            },
            src: '<%= serve.jscs.files %>',
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: 'client/config/lints/.csslintrc',
                    ignores: '<%= serve.csslint.ignore %>'
                },
                src: '<%= serve.csslint.files %>'
            }
        },
        htmlhint: {
            Root_HTML_Files: {
                options: {
                    htmlhintrc: 'client/config/lints/.htmlhint-n-rc',
                    ignores: '<%= serve.htmlhint.Root_HTML_Files.ignore %>'
                },
                src: '<%= serve.htmlhint.Root_HTML_Files.files %>'
            },
            Templates: {
                options: {
                    htmlhintrc: 'client/config/lints/.htmlhint-t-rc',
                    ignores: '<%= serve.htmlhint.Templates.ignore %>'
                },
                src: '<%= serve.htmlhint.Templates.files %>'

            }
        },
        less: {
            readyMade: {
                options: {
                    compress: true
                },
                files: '<%= serve.less.readyMade.files %>'
            },
            customMade: {
                options: {
                    compress: false
                },
                files: '<%= serve.less.customMade.files %>'
            },
            prod: {
                options: {
                    compress: true
                },
                files: '<%= serve.less.customMade.files %>'
            }
        },
        watch: {
            less: {
                options: {
                    spawn: false
                },
                files: '<%= serve.watch.less.files %>',
                tasks: ['less:customMade']
            }
        },
        strip: {
            main: {
                src: 'client/prod/apps/**/*.js',
                options: {
                    inline: true,
                    nodes: ['console.log', 'debug']
                }
            }
        },
        autoprefixer: {
            options: {
                'browsers': ['last 2 versions']
            },
            multiple: {
                expand: true,
                flatten: true,
                src: 'client/stylesheets/css/common/*.css',
                dest: 'client/stylesheets/css/common/'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: '<%= serve.htmlmin.files %>'
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-strip');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-banner');

    /**
     * Define tasks : Tasks for development eco - system.
     */
    grunt.registerTask('default', [
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessDev',
        'autofix',
        'csslint'
    ]);
    grunt.registerTask('dev', ['default']); // Alias for `default`.

    /**
     * Define tasks : Tasks for build eco - system.
     */
    grunt.registerTask('build', [
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessProd',
        'autofix',
        'csslint',
        'clean',
        'strip',
        'shell',
        'htmlmin',
        'usebanner'
    ]);

    /**
     * Define sub-tasks : Tasks for Less compilation.
     */
    grunt.registerTask('compileless', ['less:readyMade', 'less:customMade']);

    /**
     * Define sub-tasks : Tasks for Less compilation for development.
     */
    grunt.registerTask('compileLessDev', ['less:readyMade', 'less:customMade']);

    /**
     * Define sub-tasks : Tasks for Less compilation for production.
     */
    grunt.registerTask('compileLessProd', ['less:readyMade', 'less:prod']);

    /**
     * Define sub-tasks : Alias for `autofix`
     */
    grunt.registerTask('autofix', ['autoprefixer']);

};