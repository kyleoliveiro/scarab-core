'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();

const dirs = {
	src: './scss/',
	dest: './build/'
};

const paths = {
	styles: {
		main: 'style.scss',
		src: dirs.src,
		dest: dirs.dest,
		ext: '.+(scss|css)'
	}
};

const config = {
	sass: {
		outputStyle: 'expanded'
	},
	autoprefixer: {
		browsers: ['last 2 versions']
	},
	mqpacker: {
		sort: true
	}
};



/* 
* `gulp styles`
* -------------
* – Glob import .scss files
* - Compile Sass to CSS
* - Apply PostCSS transforms
* - Generate minified CSS file
*/

gulp.task('styles', () => {

	return gulp.src( paths.styles.src + paths.styles.main )

		.pipe( $.sassGlob() )

		.pipe( $.sass( config.sass )
			.on('error', $.sass.logError) )

		.pipe( $.postcss([

			autoprefixer( config.autoprefixer ),
			mqpacker( config.mqpacker )

		]) )

	.pipe( gulp.dest( paths.styles.dest ) )

		.pipe( $.postcss([
			cssnano()
		]) )

		.pipe( $.rename( (path) => {
			path.extname = '.min.css'
		}) )

	.pipe( gulp.dest( paths.styles.dest ) )

});



/* 
* `gulp watch`
* ------------
* – Watch source files for changes
* - Run relevant tasks on change
*/

gulp.task('watch', () => {

	var _glob = ( resource ) => {
		return paths[resource].src + '**/*' + paths[resource].ext;
	}

	$.watch([ _glob('styles')], ( file ) => {
		gulp.start('styles');
	});

});



/* 
* `gulp`
* ------
* – Run `gulp styles`
*/

gulp.task('default', ['styles']);
