'use strict';

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    paths = {
        sass: {
            src: './src/sass/**/*.{scss,sass}',
            dest: './src/css',
            opts: { }
        }
    };


gulp.task('sass', () => {
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
});

gulp.task('message', () => {
    console.log('It works!!');
});

gulp.task('watch:styles', () => {
  gulp.watch(paths.sass.src, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
  gulp.parallel('watch:styles')
));

gulp.task('default', gulp.series('sass',
  gulp.parallel('message', 'watch')
));
