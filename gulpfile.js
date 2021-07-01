const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('source/sass/tmdb_style.scss', { sourcemaps: false })
      .pipe(sass())
      //.pipe(postcss([cssnano()]))
      .pipe(dest('assets/css', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
  return src('source/js/*.js', { sourcemaps: false })
    .pipe(terser())
    .pipe(dest('assets/js', { sourcemaps: '.' }));
}

// Watch Task
function watchTask(){
  watch('**/*.php', browserSyncReload);
  watch(['source/sass/*.scss', 'source/js/*.js'], series(scssTask, jsTask, browserSyncReload));
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function browsersyncServe(cb){
  browsersync.init({
	  proxy: 'https://themoviedatabase/'  
  });
  cb();
}

// Default Gulp Task
exports.default = series(
	scssTask,
	jsTask,
	browsersyncServe,
	watchTask
);