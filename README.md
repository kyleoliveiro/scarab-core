# Scarab

[![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=master)](https://travis-ci.org/watchtowerdigital/scarab)
[![npm](https://img.shields.io/npm/v/scarab-scss.svg)](https://www.npmjs.com/package/scarab-scss)

Scarab is an SCSS boilerplate and collection of utilities, designed for rapid stylesheet development.





## Usage

### Getting Started

1. Clone this repository into your project
	
	`git clone https://github.com/watchtowerdigital/scarab.git`

2. Remove git origin remote

	`cd scarab && git remote rm origin`

3. Install dependencies with `npm install`
	
4. Set your `src` and `dest` paths in [`gulpfile.babel.js`](/gulpfile.babel.js)

5. Build your stylesheet with `npm run build`

6. Run `npm start` and start developing!

### Dependencies

* [**node-sass**](https://github.com/sass/node-sass)
* [**postcss**](https://github.com/postcss/postcss)
	* [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker) — Consolidates media queries to reduce file size
	* [autoprefixer](https://github.com/postcss/autoprefixer) — Applies necessary vendor prefixes (optional)
	* [cssnano](https://github.com/ben-eb/cssnano) — For build minification (optional)
* [**sass-globbing**](https://github.com/kyleoliveiro/sass-globbing) — Allows glob paths in SCSS (optional)





## Features

### Responsive, mobile-first approach
Scarab is designed with a "mobile-first" approach to stylesheet development in mind.

Store named breakpoints in the global [`$BREAKPOINTS`](/scss/_config/breakpoints.scss) variable for usage with Scarab's helper functions and mixins.

**Config**

	$BREAKPOINTS: (
		small:	40em,
		medium: 60em,
		large:	90em, // etc...
	);

#### Responsive properties
The [`responsive()`](/scss/_lib/mixins/responsive.scss) mixin provides a convenient way to write declarations for single or multiple CSS properties at different breakpoints.

**Pre-Processed SCSS:**

	.card {

		@include responsive(( padding ), (
			base:	1rem,
			medium: 2rem,
			large:	3rem
		));

		background: white;
		border: 1px solid black;

	}

**Post-Processed CSS:**

	.card {
		background: white;
		border: 1px solid black;
		padding: 1rem;
	}

	@media( min-width: 60em ) {
		.card {
			padding: 2rem;
		}
	}

	@media( min-width: 90em ) {
		.card {
			padding: 3rem;
		}
	}

#### Breakpoint queries
Media query blocks can be created from existing breakpoints using the [`query()`](/scss/_lib/mixins/query.scss) mixin.

**Pre-Processed SCSS:**

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

**Post-Processed CSS:**

	.nav-toggle {
		display: block;
	}

	.hidden-on-mobile {
		display: none;
	}
	
	@media ( min-width: 40em ) {
		.nav-toggle {
			display: none;
		}

		.hidden-on-mobile {
			display: block;
		}
	}



### Responsive Type Scale
Font sizes and line-heights can be conveniently managed with the [`$TYPE-SCALE`](/scss/_config/scale.scss) global variable.

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

**Pre-Processed SCSS:**
		
	.article-title {
		@include type-scale( heading );
	}

	.article-body {
		@include type-scale( body );
	}

**Post-Processed CSS:**

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
Manage colors and shades with the [`$PALETTES`](/scss/_config/palettes.scss) global variable.

**Config**

	$PALETTES: (
		white:	(
			base:	#ffffff
		),

		grey:	(
			light:	#eeeeee,
			base:	#999999
		), // etc...
	);

**Pre-Processed SCSS:**

	.card {
		background: palette( white );
		border: 1px solid palette( light grey );
	}

**Post-Processed CSS:**

	.card {
		background: #ffffff;
		border: 1px solid #eeeeee;
	}



### Animations & transitions
The [`$DURATIONS` and `$EASINGS`](/scss/_config/animation.scss) global variables can be used in conjunction with `duration()` and `easing()` to return named values.

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
	
**Pre-Processed SCSS:**
	
	a {
		transition: color duration(medium) easing(ease-in-out-quart);
	}

**Post-Processed CSS:**

	a {
		transition: color 0.5s cubic-bezier(0.77, 0, 0.175, 1);
	}





### Development utilities

#### Baseline Grid Overlay

Overlays horizontal lines over the viewport.

This is useful for maintaining a consistent vertical rythmn throughout the page.
The size of the baseline grid is determined by the global [`$BASELINE`](/scss/_config/scale.scss) variable.
	
	// Activate Scarab's baseline grid overlay
	html {
		@include baseline-grid( true );
	}

	// Including the mixin within any element will also work.
	// This is useful for quick activation of the overlay within any file.
	.button {
		@include baseline-grid( true );
	}

#### Element Overlay

Causes every element in the document to become highlighted with a translucent background. The deeper element resides in the DOM tree, the more opaque its background will be.

While the element overlay is active, **hovering** over any element displays a border around it, while **clicking or tapping** on an element for an extended period of time will display information about itself and its parents.
	
	// Activate Scarab's element overlay
	html {
		@include element-overlay( true );
	}

	// Including the mixin within any element will also work.
	// This is useful for quick activation of the overlay within any file.
	article {
		@include element-overlay( true );
	}

****Warning****
Do not include Scarab's Development Utilities in production. Doing so will generate extraneous CSS declarations and bloat your stylesheets.
