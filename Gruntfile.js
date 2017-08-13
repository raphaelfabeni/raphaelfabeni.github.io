"use strict";

module.exports = function( grunt ) {

  grunt.initConfig({

    // Config variable paths
    config: {
      dev: 'assets/',
      build: 'build/'
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

    // BABEL _____________________________________________________________________
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          '<%= config.dev %>js/colors.js': '<%= config.dev %>js/es6/colors.js'
        }
      }
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

      jquery: {
        src: 'bower_components/jquery/jquery.min.js',
        dest: '<%= config.build %>js/libs/jquery.min.js'
      },

      chart: {
        src: 'bower_components/chart.js/dist/Chart.min.js',
        dest: '<%= config.build %>js/libs/Chart.min.js'
      }

    },

    // JSHINT _____________________________________________________________________
    jshint: {

      // Project files
      dev: [
        '<%= config.dev %>js/boot.js',
        '<%= config.dev %>js/es6/colors.js',
        '<%= config.dev %>js/projects.js',
        '<%= config.dev %>js/archive.js'
      ],
      options: {
        "esnext": true,
        reporter: require('jshint-stylish')
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

      jekyll_review: {
        command: "jekyll serve --watch",
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
      },

      review: {
        tasks: [
          'shell:jekyll_review',
          'watch'
        ],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    // COPY _________________________________________________________________
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: '<%= config.dev %>fonts',
            src: ['**'],
            dest: '<%= config.build %>fonts/'
          },
        ],
      },
      images: {
        files: [
          {
            expand: true,
            cwd: '<%= config.dev %>img',
            src: ['**'],
            dest: '<%= config.build %>img/'
          },
        ],
      },
    },

    // JASMINE ____________________________________________________________________
    jasmine: {
      coverage: {
        src: ['assets/js/colors.js'],
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
              branches: 60,
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
          '<%= config.dev %>js/es6/colors.js'
        ],
        tasks: ['jshint', 'babel', 'uglify:dev'],
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
          '<%= config.build %>**'
        ],
      },
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-coveralls');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-babel');

  // Grunt tasks

  // Init
  grunt.registerTask( 'init', ['uglify:jquery', 'uglify:chart' ] );

  // CSS
  grunt.registerTask( 'css', [ 'sass' ] );

  // JS
  grunt.registerTask( 'js', [ 'babel', 'jshint', 'uglify' ] );

  // Watch
  grunt.registerTask( 'live', [ 'watch' ] );

  // Tests
  grunt.registerTask( 'tests', [ 'jasmine' ] );

  // Server
  // Watch
  grunt.registerTask( 'server', [ 'concurrent:dev' ] );
  grunt.registerTask( 'review', [ 'concurrent:review' ] );

  // Build
  grunt.registerTask( 'build', [ 'sass', 'js', 'shell:jekyll_build', 'copy' ] );
  // Ci
  grunt.registerTask('ci', [ 'jshint', 'jasmine', 'coveralls' ]);

};
