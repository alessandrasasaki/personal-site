'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var runSequence = require('run-sequence');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./source/sass/style.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./source/sass/build'));
  });

gulp.task('sass:watch', function () {
  return gulp.watch('./source/sass/style.sass', ['sass']);
});

gulp.task('autoprefixer', function () {

  return gulp.src('./source/sass/build/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./source/sass/build'));
});

gulp.task('autoprefixer:watch', function () {
  return gulp.watch('./source/sass/build/*.css', ['autoprefixer']);
  callback();
});
 
gulp.task('babel', () => {
  return gulp.src('./source/js/indexController.js')
             .pipe(babel({
                presets: ['@babel/env']
              }))
              .pipe(gulp.dest('source/js/build'))
} );

gulp.task('babel:watch', function () {
  return gulp.watch('./source/js/indexController.js', ['babel']);
});

gulp.task('compile', function(callback) {
  runSequence(['sass', 'sass:watch'],
              ['babel', 'babel:watch'],
              ['autoprefixer', 'autoprefixer:watch'],
              callback);
});