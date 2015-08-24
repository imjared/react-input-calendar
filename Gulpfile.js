var gulp    = require('gulp');
var gutil   = require('gulp-util');
var $       = require('gulp-load-plugins')();

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.dev.js');

var handleErrors = function() {
    var args = Array.prototype.slice.call(arguments);
    $.notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
};

// Webpack Bundle
gulp.task('webpack', function(callback) {

    var compiler = webpack(webpackConfig);

    function bundle(err, stats) {
        if ( err ) { throw new $.util.PluginError('webpack', err); }
        return callback();
    }

    new WebpackDevServer(compiler, {
        hot: true
    }).listen(3100, 'localhost', function(err) {
        if ( err ) { throw new $.util.PluginError('webpack-dev-server', err); }
        // Server listening
        $.util.log('[webpack-dev-server]', 'http://localhost:3100/webpack-dev-server/index.html');
        callback();
    });

});

gulp.task('dist', function() {
    return gulp.src('./src/**')
        .pipe($.react({
            harmony: true
        }))
        .on( 'error', handleErrors )
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch( './src/**/*.js', ['dist']);
});

gulp.task('default', [
    'webpack',
    'watch'
]);
