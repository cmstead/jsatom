module.exports = function(config){
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        reporters: ['progress', 'coverage'],

        browsers: ['PhantomJS'],

        files: [
            '../node_modules/jfp/dist/jfp.js',
            '../src/atom.js',
            './**/*.spec.js'
        ],

        preprocessors: {
            '../src/atom.js': ['coverage']
        },

        coverageReporter: {
            type: 'text-summary'
        },

        colors: true,

        autoWatch: false,
        singleRun: true
    });


}
