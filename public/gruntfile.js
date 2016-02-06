/**
 * Created by chanx on 5/2/16.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            files: {
                src: 'assets/sass/style.scss',
                dest: 'assets/css/style.css'
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default',['sass']);
}