const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

//metoda kontrolna do sprawdzenia poprawnosci dzialania gulp
gulp.task('hello', function () {
    console.log('Hello Zell');
});

//zamienia SCSS na CSS
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//aktualizuje CSS po zmianie SCSS
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
});

//synchronizuje na bierzaco przegladarke
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

