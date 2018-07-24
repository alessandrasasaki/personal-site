'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function () {
    return gulp.src('./source/sass/style.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./source/sass/build'));
  });

gulp.task('sass:watch', function () {
  gulp.watch('./source/sass/style.sass', ['sass']);
});