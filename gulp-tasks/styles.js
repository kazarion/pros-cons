import gulp from 'gulp'
import stylint from 'gulp-stylint'
import stylus from 'gulp-stylus'
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';

gulp.task('stylint', () => (
	gulp.src([	'src/node_modules/components/**/*.styl',
							'src/node_modules/containers/**/*.styl',
							'src/node_modules/pages/**/*.styl',
							'!src/node_modules/styl/**/*.*'
					])
		.pipe(plumber({errorHandler: errorHandler(`Error in \'styles\' task`)}))
		.pipe(stylint({
			reporter: 'stylint-stylish',
			reporterOptions: {verbose: true}
		}))
		.pipe(stylint.reporter())
		.pipe(stylint.reporter('fail', {failOnWarning: true}))
))
