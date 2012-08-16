var cssFiles = {
    dist: {
        src: ['asset/css/vendor/base.css','asset/css/responsive.css','asset/css/background.css','asset/css/font/Engagement.css','asset/css/font/Brawler.css','asset/css/main.css'],
        dest: 'asset/css/ftpm.css'
    }
}

module.exports = function(grunt) {

    var config = {

        //debug mode
        concat: {
            css:cssFiles.dist
        },

        //minify
        cssmin: cssFiles
    }

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', 'cssmin');

};