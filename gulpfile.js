var gulp = require('gulp');
var concat = require('gulp-concat');

var bases = {
  app: 'app/',
  dist: 'dist/',
};

var paths = {
  js: ['js/*.js'],
  css: ['css/*.css'],
  jslibs: ['js/**/*.js', '!js/*.js']
}

gulp.task('css', function(){
  gulp.src(paths.css, {cwd: bases.app})
    .pipe(concat('style.css'))
    .pipe(gulp.dest(bases.dist + 'css'));
});

gulp.task('js', function(){
  gulp.src(paths.js, {cwd: bases.app})
    .pipe(concat('popup.js'))
    .pipe(gulp.dest(bases.dist + 'js'));
});

gulp.task('copy', function(){
  // Copy HTML
  gulp.src('*.html', {cwd: bases.app})
    .pipe(gulp.dest(bases.dist));

  // Copy images
  gulp.src('*.png', {cwd: bases.app})
    .pipe(gulp.dest(bases.dist));

  // Copy json
  gulp.src('*.json', {cwd: bases.app})
    .pipe(gulp.dest(bases.dist));

  // Copy JS Libraries
  gulp.src(paths.jslibs, {cwd: bases.app + '**'})
    .pipe(gulp.dest(bases.dist));
});

gulp.task('watch', function(){
  gulp.watch(bases.app + '**/*', ['css', 'js', 'copy']);
  //gulp.watch([''], ['']);
});

gulp.task('build', ['css', 'js', 'copy', 'watch']);
