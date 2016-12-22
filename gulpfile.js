var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    minifyCSS = require('gulp-cssnano');

gulp.task('compileLess', function(){
  return gulp.src('src/less/main.less')
          .pipe(less({
            paths: __dirname + "./",
      			filename: "main.less"
          }))
          .pipe(minifyCSS())
          .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
  return gulp.watch('src/less/**/*.less', ['compileLess']);
});

gulp.task('default', ['watch']);
