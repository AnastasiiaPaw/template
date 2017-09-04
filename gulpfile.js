var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public'))
});

gulp.task('watch', function() {
  return gulp.watch('src/scss/**/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);
