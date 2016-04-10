# Scarab

[![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=master)](https://travis-ci.org/watchtowerdigital/scarab)
[![npm](https://img.shields.io/npm/v/scarab-scss.svg)](https://www.npmjs.com/package/scarab-scss)

SCSS boilerplate for rapid stylesheet development.





## Usage

### Quickstart

1. Clone this repository into your project
	
	`git clone -o https://github.com/watchtowerdigital/scarab`

2. Install dependencies
	
	`npm install`

3. Set your `src` and `dest` paths in [`gulpfile.babel.js`](/gulpfile.babel.js)

4. Build your stylesheet

	`gulp`

### Dependencies

* [**node-sass**](https://github.com/sass/node-sass)
* [**postcss**](https://github.com/postcss/postcss)
	* [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker) — Consolidates media queries to reduce file size
	* [autoprefixer](https://github.com/postcss/autoprefixer) — Applies necessary vendor prefixes (optional)
	* [cssnano](https://github.com/ben-eb/cssnano) — For build minification (optional)
* [**sass-globbing**](https://github.com/chriseppstein/sass-globbing) — Allows glob paths in SCSS (optional)





## Features

### Development utilities

****Warning****
Do not include Scarab's Development Utilities in production. Doing so will generate extraneous CSS declarations and bloat your stylesheets.

**Baseline Grid Overlay**

Including the `baseline-grid()` mixin within any element will overlay horizontal lines on top of the viewport. This is useful for maintaining a consistent vertical rythmn throughout the page. The size of the baseline grid is determined by the global [`$BASELINE`](/scarab/conifg/scale.scss) variable.
	
	// Activate Scarab's baseline grid overlay
	html {
		@include baseline-grid( true );
	}

	// Including the mixin within any other element will work as well.
	// This is useful for activating the overlay quickly from within any file.
	.button {
		@include baseline-grid( true );
	}

**Element Overlay**

The `element-overlay()` mixin causes every element in the document to become highlighted with a translucent background. The deeper element resides in the DOM tree, the more opaque its background will be.

While the element overlay is active, **hovering** over any element displays a border around it, while **clicking or tapping** on an element for an extended period of time will display information about itself and its parents. 
	
	// Activate Scarab's element overlay
	html {
		@include element-overlay( true );
	}

	// Including the mixin within any other element will work as well.
	// This is useful for activating the overlay quickly from within any file.
	article {
		@include element-overlay( true );
	}


### Responsive, mobile-first approach
Scarab is designed with a "mobile-first" approach to stylesheet development in mind.

Store named breakpoints in the global [`$BREAKPOINTS`](/scarab/config/breakpoints.scss) variable for usage with Scarab's helper functions and mixins.

**Config**

	$BREAKPOINTS: (
		small: 640px,
		medium: 960px,
		large: 1440px
	);

#### Responsive properties
The [`responsive()`](/scarab/lib/mixins/responsive.scss) mixin provides a convenient way to write declarations for single or multiple CSS properties at different breakpoints.

**SCSS**

	.card {
		background: white;
		border: 1px solid black;

		@include responsive(( padding ), (
			base: 1rem,
			medium: 2rem,
			large: 3rem
		));
	}

**CSS**

	.card {
		background: white;
		border: 1px solid black;
		padding: 1rem;
	}

	@media( min-width: 960px ) {
		.card {
			padding: 2rem;
		}
	}

	@media( min-width: 1440px ) {
		.card {
			padding: 3rem;
		}
	}

#### Breakpoint queries
Media query blocks can be created from existing breakpoints using the [`query()`](/scarab/lib/mixins/query.scss) mixin.

**SCSS**

	.nav-toggle {
		display: block;
	}

	.hidden-on-mobile {
		display: none;

		@include query( small ) {
			display: block;
		}
	}

	@include query( small ) {
		.nav-toggle {
			display: none;
		}
	}

**CSS**

	.nav-toggle {
		display: block;
	}

	.hidden-on-mobile {
		display: none;
	}
	
	@media ( min-width: 640px ) {
		.nav-toggle {
			display: none;
		}

		.hidden-on-mobile {
			display: block;
		}
	}



### Responsive Type Scale
Font sizes and line-heights can be conveniently managed with the [`$TYPE-SCALE`](/scarab/config/scale.scss) global variable.

The `keys` in `$TYPE-SCALE` accept a Sass map as their values. Pass in a map of *breakpoints to properties* to allow font sizes and line heights to scale at each breakpoint.

**Config**
	
	$TYPE-SCALE: (
		heading: (
			base: 	( font-size: 20px, 	line-height: 2 ),
			medium:	( font-size: 32px, 	line-height: 2.5 )
		),

		body: (
			base: 	( font-size: 14px, 	line-height: 1.5 ),
			medium: ( font-size: 18px,	line-height: 2 )
		), // etc...
	);

**SCSS**
		
	.article-title {
		@include type-scale( heading );
	}

	.article-body {
		@include type-scale( body );
	}

**CSS**

	.article-title {
		font-size: 20px;
		line-height: 2;
	}

	.article-body {
		font-size: 14px;
		line-height: 1.5;
	}

	@media ( min-width: 960px ) {
		.article-title {
			font-size: 32px;
			line-height: 2.5;
		}

		.article-body {
			font-size: 18px;
			line-height: 2;
		}
	}



### Color palettes
Manage colors and shades with the [`$PALETTES`](/scarab/config/palettes.scss) global variable.

**Config**

	$PALETTES: (
		white:	(
			base: #ffffff
		),

		grey:	(
			light: #eeeeee,
			base: #999999
		), // etc...
	);

**SCSS**

	.card {
		background: palette( white );
		border: 1px solid palette( light grey );
	}

**CSS**

	.card {
		background: #ffffff;
		border: 1px solid #eeeeee;
	}



### Animations & transitions
The [`$DURATIONS` and `$EASINGS`](/scarab/config/animation.scss) global variables can be used in conjunction with `duration()` and `easing()` to return named values.

**Config**

	$DURATIONS: (
		short: 0.2s,
		medium: 0.5s,
		long: 1s
	);

	$EASINGS: (
		ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1),
		ease-in-out-expo: cubic-bezier(1, 0, 0, 1),
		ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55), // etc...
	);
	
**SCSS**
	
	a {
		transition: color duration(medium) easing(ease-in-out-quart);
	}

**CSS**

	a {
		transition: color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
	}
