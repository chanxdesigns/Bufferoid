module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            grunt: {
                files: 'gruntfile.js',
                tasks: ['default']
            },
            src: {
                files: ['resources/assets/sass/*.scss','resources/assets/img/*','resources/assets/js/*.js'],
                tasks: ['default']
            }
        },
        sass: {
            files: {
                src: 'resources/assets/sass/style.scss',
                dest: "public/assets/css/style.css"
            }
        },
        copy: {
            vendor: {
                expand: true,
                cwd: "resources/vendor/",
                src: '*',
                dest: "public/vendor/"
            },
            js: {
                expand: true,
                cwd: "resources/assets/js/",
                src: "*.js",
                dest: "public/assets/js/"
            },
            img: {
                expand: true,
                cwd: "resources/assets/img/",
                src: "*",
                dest: "public/assets/img/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['sass','copy']);
};