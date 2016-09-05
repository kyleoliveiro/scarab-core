'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';

const $ = gulpLoadPlugins();

const dirs = {
	src: './scss/',
	test: './test/',
	dest: './build/'
};

const paths = {
	scarab: {
		main: 'scarab.scss',
		src: dirs.src,
		dest: dirs.dest,
		ext: '.+(scss|css)'
	},
	test: {
		main: 'scarab.scss',
		src: dirs.src
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
	}
};



/* 
* `gulp sass`
* -------------
* – Glob import .scss files
* - Compile Sass to CSS
* - Apply PostCSS transforms
* - Generate minified CSS file
*/

gulp.task('sass', () => {

	return gulp.src( paths.scarab.src + paths.scarab.main )

		.pipe( $.sassGlob() )

		.pipe( $.sass( config.sass )
			.on('error', $.sass.logError) )

		.pipe( $.postcss([

			autoprefixer( config.autoprefixer ),
			mqpacker( config.mqpacker )

		]) )

	.pipe( gulp.dest( paths.scarab.dest ) )

		.pipe( $.postcss([
			cssnano()
		]) )

		.pipe( $.rename( (path) => {
			path.extname = '.min.css'
		}) )

	.pipe( gulp.dest( paths.scarab.dest ) )

});



/* 
* `gulp test`
* -------------
* – Test Scarab
*/

gulp.task('test', ['sass'], () => {

	return gulp.src( paths.test.src + paths.test.main )

		.pipe( $.sassGlob() )

		.pipe( $.sass( config.sass )
			.on('error', $.sass.logError) )

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

	$.watch([ _glob('scarab')], ( file ) => {
		gulp.start('sass');
	});

});



/* 
* `gulp`
* ------
* – Run `gulp styles`
*/

gulp.task('default', ['sass']);
