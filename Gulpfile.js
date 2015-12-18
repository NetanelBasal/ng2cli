var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('dev', function() {
  return gulp.src('./lib/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  gulp.src('./lib/blueprints/**/**', { base: "./lib" })
    .pipe(gulp.dest('./dist'));

  gulp.src('./lib/config/config.json')
    .pipe(gulp.dest('./dist/config'));
});

gulp.task('build', ['dev', 'copy'], function() {
  console.log('done');
});