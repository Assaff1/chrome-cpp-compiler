var gulp   = require('gulp');
var concat = require('gulp-concat');
var babel  = require('gulp-babel');

var bases = {
  app: 'app/',
  dist: 'dist/',
  vendor: 'dist/vendor',
};

var paths = {
  js:     ['js/*.js'],
  jsx:    ['js/components/*.jsx'],
  css:    ['css/*.css'],
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

gulp.task('babel', function(){
  gulp.src(paths.jsx, {cwd: bases.app})
    .pipe(babel({
      plugins: ['transform-react-jsx']
    }))
    .pipe(concat('app.js'))
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

  // Copy React
  gulp.src('react/dist/react.min.js', {cwd: 'node_modules/'})
    .pipe(gulp.dest(bases.vendor));
  gulp.src('react-dom/dist/react-dom.min.js', {cwd: 'node_modules/'})
    .pipe(gulp.dest(bases.vendor));

  // Copy jQuery
   gulp.src('jquery/dist/jquery.min.js', {cwd: 'node_modules/'})
    .pipe(gulp.dest(bases.vendor));
});

gulp.task('watch', function(){
  gulp.watch(bases.app + '**/**/*', ['css', 'js', 'babel', 'copy']);
  //gulp.watch([''], ['']);
});

gulp.task('build', ['css', 'js', 'babel', 'copy', 'watch']);
