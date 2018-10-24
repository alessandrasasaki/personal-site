'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

gulp.task('default', ['sass', 'sass:watch']);

gulp.task('sass', function () {
    return gulp.src('./source/sass/style.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./source/sass/build'));
  });

gulp.task('sass:watch', function () {
  gulp.watch('./source/sass/style.sass', ['sass']);
});

gulp.task('autoprefixer', function () {
  var postcss      = require('gulp-postcss');
  var sourcemaps   = require('gulp-sourcemaps');
  var autoprefixer = require('autoprefixer');

  return gulp.src('./source/sass/build/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./source/sass/build'));
});