var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
 
gulp.task('sass', function () {
    gulp.src('./assets/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        // .pipe(minifyCSS())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', [
	'watch',
	'sass',
]);