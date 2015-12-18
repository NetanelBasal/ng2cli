var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('dev', function() {
  return gulp.src('./lib/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('cpBlueprints', function() {
  gulp.src('./lib/blueprints/**/**', { base: "./lib" })
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['dev', 'cpBlueprints'], function() {
  console.log('done');
});