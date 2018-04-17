var gulp = require('gulp');

gulp.task('imagesInject', () => {
  return gulp.src('./app/img/**')
    .pipe(gulp.dest('./temp/img'));
});
