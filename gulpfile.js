var {src, dest, watch} = require('gulp');
var gulp = require('gulp')
var sass = require('gulp-sass');
sass.complier = require('node-sass');

let srcPath = './src/*.scss'
let destPath =  './dist/css/'

function css(){
  return src('./src/*.scss')
    .pipe(sass({
      errLogToConsole : true
    }))
    .pipe(dest('./dist/css/'))
};

gulp.task('default',css);

var watcher = gulp.watch(srcPath, ['default']);

// gulp.task('default',['sass'])

// exports.default = css;