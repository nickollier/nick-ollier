module.exports = function(grunt) {
    
        // Project configuration.
        grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),

            sass: {
                dist: {
                    options: {
                        style: 'expanded',
                        sourcemap: 'auto'
                    },
                    src:  ['scss/base.scss'],
                    dest: 'css/styles.css'
                }
            },

            concat: {
                build: {
                    src: "js-snippets/*.js",
                    dest: "js/functions.js"
                }
            },
            
            connect: {
                server: {
                    options: {
                        livereload: true,
                        base: '.',
                        hostname: 'localhost',
                        port: 8080
                    }
                }
            },

            watch: {
                //taskName: {
                    options: {
                        livereload: true
                    },
                    css: {
                        files: ['**/*.scss'],
                        tasks: ['sass']
                    },
                    js: {
                        files: ['js-snippets/*.js'],
                        tasks: ['concat']
                    }
                //}
            }
        });
    
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-sass');
        
        grunt.registerTask('default', [
    
        ]);
    
        grunt.registerTask('serve', [
            'sass',
            'concat',
            'connect',
            'watch'
        ]);
    };