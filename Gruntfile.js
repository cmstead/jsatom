var jshintConfig = require('./grunt/jshint.json'),
    karmaConfig = require('./grunt/karma.json');

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: jshintConfig,
        karma: karmaConfig
    });

    /* Load grunt task adapters */

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    /* Register composite grunt tasks */

    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('default', ['test']);
};