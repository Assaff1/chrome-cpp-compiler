const gulp   = require('gulp');
const concat = require('gulp-concat');
const babel  = require('gulp-babel');
const webpack = require('webpack');
const path = require('path');

var bases = {
  app: 'src/',
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

gulp.task('jsx', function(){
  var plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ];

  webpack({
    plugins: plugins,
    cache: true,
    //watch: watch,
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets:['react']
          }
        }
      ]
    },
    devtool: "#source-map",
    entry: path.resolve(__dirname, bases.app + 'js/main.jsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/js')
    }
  }).run(function(err, stats){
    console.log(err);
    //console.log(stats);
  });
	// gulp.src(paths.jsx, {cwd: bases.app})
	//   .pipe(babel({
  //     plugins: ['transform-react-jsx']
  //   }))
  //   .pipe(concat('app.js'))
  //   .pipe(gulp.dest(bases.dist + 'js'));
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

  // Copy jQuery
   gulp.src('react-ace/dist/react-ace.min.js', {cwd: 'node_modules/'})
    .pipe(gulp.dest(bases.vendor));

});

gulp.task('watch', function(){
  gulp.watch(bases.app + '**/**/*', ['css', 'js', 'jsx', 'copy']);
  //gulp.watch([''], ['']);
});

gulp.task('dev', ['css', 'js', 'jsx', 'copy', 'watch']);
