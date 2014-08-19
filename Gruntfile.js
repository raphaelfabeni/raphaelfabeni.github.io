"use strict";

module.exports = function( grunt ) {

    grunt.initConfig({

        // Config variable paths
        config: {

            // Project paths
            dev: 'assets/',
            build: 'build/',

            // Styleguide paths
            style_dev: 'styleguide/lib/assets/',
            style_build: 'styleguide/lib/build/'
        },

        // IMAGES _____________________________________________________________________

        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    convertPathData: { 
                        straightCurves: false
                    }
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dev %>img',
                    src: ['*.svg'],
                    dest: '<%= config.build %>img',
                    ext: '.svg'
                }]
            }
        },

        svg2png: {
            all: {
                files: [{
                    cwd: '<%= config.dev %>img/',
                    src: ['*.svg'],
                    dest: '<%= config.build %>img/'
                }]
            }
        },

        // SASS _______________________________________________________________________
        sass: {

            // Dev
            dev: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    '<%= config.build %>css/main.min.css': 
                    '<%= config.dev %>scss/main.scss'
                }
            },

        },

        // UGLIFY _____________________________________________________________________
        uglify: {

            // Project files
            dev: {
                files: {
                    '<%= config.build %>js/scripts.min.js': 
                    ['<%= config.dev %>js/ga.js',
                    '<%= config.dev %>js/scripts.js',
                    '<%= config.dev %>js/social.js']
                }
            },

            projects: {
                files: {
                    '<%= config.build %>js/projects.min.js': 
                    ['<%= config.dev %>js/ga.js',
                    '<%= config.dev %>js/scripts.js',
                    'bower_components/jquery-github/dist/jquery.github.min.js',
                    '<%= config.dev %>js/projects.js',
                    '<%= config.dev %>js/social.js']
                }
            },

            // Start files
            modernizr: {
                src: 'bower_components/modernizr/modernizr.js',
                dest: '<%= config.build %>js/libs/modernizr.min.js'
            },

            jquery: {
                src: 'bower_components/jquery/jquery.min.js',
                dest: '<%= config.build %>js/libs/jquery.min.js'
            },

            respond: {
                src: 'bower_components/respond/dest/respond.min.js',
                dest: '<%= config.build %>js/libs/respond.min.js'
            }
        },

        // JSHINT _____________________________________________________________________
        jshint: {

            // Project files
            dev: [
                '<%= config.dev %>js/scripts.js',
                '<%= config.dev %>js/projects.js'
            ],
                options: {
                    globals: {
                        jQuery: true,
                        reporter: require('jshint-stylish')
                }
            },
        },


        // WATCH ______________________________________________________________________
        watch: {

            // PROJECT TASKS

            // Run SASS task for .scss files
            sass_dev: {
                files: [
                    '<%= config.dev %>scss/**/*.scss',
                    '<%= config.dev %>scss/*.scss'
                ],
                tasks: ['sass:dev'],
            },

            // Run Uglify task when scripts are modified
            scripts_dev: {
                files: ['<%= config.dev %>js/scripts.js'],
                tasks: ['jshint', 'uglify'],
            },

            scripts_projects: {
                files: ['<%= config.dev %>js/projects.js'],
                tasks: ['jshint', 'uglify:projects'],
            },

            svg: {
                files: ['<%= config.dev %>img/*.svg'],
                tasks: ['svgmin', 'svg2png']
            },

            // Update :)
            livereload: {
                options: { livereload: true },
                files: [
                    // Project files
                    '<%= config.build %>css/main.min.css',
                    '<%= config.build %>js/scripts.min.js',
                    '<%= config.build %>js/projects.min.js',
                    '<%= config.build %>img/*.{png,jpg,gif,svg}'
                ],
            },
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svg2png');

    // Grunt tasks

    // Init
    grunt.registerTask( 'init', [ 'uglify:modernizr', 'uglify:jquery', 'uglify:respond' ] );

    // CSS
    grunt.registerTask( 'css', [ 'sass' ] );

    // JS
    grunt.registerTask( 'js', [ 'jshint', 'uglify' ] );

    // Watch
    grunt.registerTask( 'live', [ 'watch' ] );

};