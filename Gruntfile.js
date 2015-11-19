"use strict";

module.exports = function( grunt ) {

  grunt.initConfig({

    // Config variable paths
    config: {
      dev: 'assets/',
      build: 'build/'
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
            '<%= config.dev %>js/colors.js',
            '<%= config.dev %>js/boot.js']
          },
          options: {
            sourceMap: true
          }
        },

        // Project files
        blog: {
          files: {
            '<%= config.build %>js/archive.min.js':
            ['<%= config.dev %>js/ga.js',
            '<%= config.dev %>js/archive.js',
            '<%= config.dev %>js/colors.js',
            '<%= config.dev %>js/boot.js',
            '<%= config.dev %>js/social.js']
          }
        },

        projects: {
          files: {
            '<%= config.build %>js/projects.min.js':
            ['<%= config.dev %>js/ga.js',
            '<%= config.dev %>js/colors.js',
            '<%= config.dev %>js/boot.js',
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
          '<%= config.dev %>js/boot.js',
          '<%= config.dev %>js/colors.js',
          '<%= config.dev %>js/projects.js',
          '<%= config.dev %>js/archive.js'
        ],
        options: {
          globals: {
            jQuery: true,
            reporter: require('jshint-stylish')
          }
        },
      },

      // SHELL _____________________________________________________________________
      shell: {
        jekyll_serve: {
          command: "jekyll serve --watch --drafts",
          options: {
              stderr: false
          }
        },

        jekyll_build: {
          command: "jekyll build",
          options: {
              stderr: false
          }
        }
      },

      // CONCURRENT _________________________________________________________________
      concurrent: {
        dev: {
          tasks: [
            'shell:jekyll_serve',
            'watch'
          ],
          options: {
            logConcurrentOutput: true
          }
        }
      },

      // JASMINE ____________________________________________________________________
      jasmine: {
        coverage: {
          src: ['assets/js/local.js', 'assets/js/colors.js'],
          options: {
            specs: 'spec/*Spec.js',
            template: require('grunt-template-jasmine-istanbul'),
            templateOptions: {
              coverage: 'bin/coverage/coverage.json',
              report: {
                type: 'lcov',
                options: {
                  dir: 'bin/coverage'
                }
              },
              thresholds: {
                lines: 75,
                statements: 75,
                branches: 75,
                functions: 90
              }
            }
          }
        }
      },

      // COVERRALS __________________________________________________________________
      coveralls: {
        general: {
          src: 'bin/coverage/lcov.info'
        }
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
          files: [
            '<%= config.dev %>js/boot.js',
            '<%= config.dev %>js/colors.js'
          ],
          tasks: ['jshint', 'uglify:dev'],
        },

        scripts_projects: {
          files: ['<%= config.dev %>js/projects.js'],
          tasks: ['jshint', 'uglify:projects'],
        },

        scripts_blog: {
          files: ['<%= config.dev %>js/archive.js'],
          tasks: ['jshint', 'uglify:blog'],
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
            '_site/build/css/main.min.css',
            '<%= config.build %>css/main.min.css',
            '<%= config.build %>js/scripts.min.js',
            '<%= config.build %>js/projects.min.js',
            '<%= config.build %>js/archive.min.js',
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
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-coveralls');

  // Grunt tasks

  // Init
  grunt.registerTask( 'init', [ 'uglify:modernizr', 'uglify:jquery', 'uglify:respond' ] );

  // CSS
  grunt.registerTask( 'css', [ 'sass' ] );

  // JS
  grunt.registerTask( 'js', [ 'jshint', 'uglify' ] );

  // Watch
  grunt.registerTask( 'live', [ 'watch' ] );

  // Tests
  grunt.registerTask( 'tests', [ 'jasmine' ] );

  // Server
  // Watch
  grunt.registerTask( 'server', [ 'concurrent:dev' ] );

  // Build
  grunt.registerTask( 'build', [ 'sass', 'js', 'shell:jekyll_build' ] );
  grunt.registerTask('ci', [ 'jshint', 'jasmine', 'coveralls' ]);

};
