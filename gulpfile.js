const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

const autoprefixer = require('gulp-autoprefixer');


//metoda kontrolna do sprawdzenia poprawnosci dzialania gulp
gulp.task('hello', function () {
    console.log('Hello Zell');
});

//zamienia SCSS na CSS
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        //purifyCSS
        //vinyll do ftp polaczenia automatycznie
        .pipe(autoprefixer({                            //odpowiada za znormalizowania kodu CSS na wszystkie przegladarki
            browsers: ['last 2 versions'],
            cascade: false
        }))
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

