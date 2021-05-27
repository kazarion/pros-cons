import gulp from 'gulp'
import runSequence from 'run-sequence'
import watch from 'gulp-watch'

gulp.task('styl-watch', () => {
	global.watch = true;
	watch('src/node_modules/**/*.styl', () => {
		runSequence(['stylint']);
	});

});
