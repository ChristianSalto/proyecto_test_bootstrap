const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

scssTask = () => {
  return src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('src/css'));
  // .pipe(browserSync.stream());
};

jsTask = () => {
  return src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/@popperjs/core/dist/umd/popper.min.js',
  ]).pipe(dest('src/js'));
  // .pipe(browserSync.stream());
};

fontAwesome = () => {
  return src('node_modules/font-awesome/css/font-awesome.min.css').pipe(
    dest('src/css'),
  );
};

fonts = () => {
  return src('node_modules/font-awesome/fonts/*').pipe(dest('src/fonts'));
};

// Browsersync Tasks
browsersyncServe = (cb) => {
  browserSync.init({
    server: {
      baseDir: './src',
    },
  });
  cb();
};

browsersyncReload = (cb) => {
  browserSync.reload();
  cb();
};

// Watch Task
watchTask = () => {
  // watch('src/*.html').on('change',()=>{
  // 	series(browsersyncReload)
  // });
  watch(
    ['src/scss/*.scss', 'src/js/*.js', 'src/*.html'],
    series(scssTask, browsersyncReload),
  );
};

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  fontAwesome,
  fonts,
  browsersyncServe,
  watchTask,
);
