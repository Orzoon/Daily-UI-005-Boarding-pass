var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('src/*.SCSS')
                .pipe(sass({outputStyle: 'nested'}))
                .pipe(autoprefixer({
                    browsers: ['last 5 versions']
                }))
                .pipe(gulp.dest('dist'))
})

gulp.task('pug', function () {
    return gulp.src('src/index.pug')
                .pipe(pug({
                    pretty: true
                }))
                .pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
    gulp.watch('src/*.SCSS', ['sass']);
    gulp.watch('src/index.pug', ['pug']);
})
