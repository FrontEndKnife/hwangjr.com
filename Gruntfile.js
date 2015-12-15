module.exports = function(grunt) {
    // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    // setup plugins
    grunt.initConfig({
        cafemocha: {
            all: {src: 'qa/tests-*.js', options: {ui: 'tdd'},}
        },
        jshint: {
            app: ['hwangjr.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        exec: {
            linkChecker: {
                cmd: 'linkchecker http://localhost:3000'
            }
        },
    });
    
    // register task
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
