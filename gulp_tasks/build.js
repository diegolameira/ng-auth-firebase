const gulp = require('gulp');
const uglify = require('gulp-uglify');
const uglifySaveLicense = require('uglify-save-license');
const ngAnnotate = require('gulp-ng-annotate');
const concat = require('gulp-concat');

const conf = require('../conf/gulp.conf');

gulp.task('build', build);

function build() {

  return gulp.src([conf.path.src('**/*.js'), conf.path.tmp('**/*.js')])
    .pipe(ngAnnotate())
    .pipe(concat('ng-auth-firebase.min.js'))
    .pipe(uglify({preserveComments: uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
    .pipe(gulp.dest(conf.path.dist()));
}
