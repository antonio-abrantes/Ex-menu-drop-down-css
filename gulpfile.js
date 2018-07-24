/**
 * Created by Antonio on 24/07/2018.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compilar os aquivos sass
gulp.task('sass', function () {

  return gulp.src(['src/scss/*.scss'])
        .pipe(sass()) // converter o Sass em CSS
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Servidor para olhar HTML/CSS
gulp.task('serve', ['sass'], function () {

    browserSync.init({
       server: "./src"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
    gulp.watch("src/css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);