# Scarab

SCSS boilerplate for rapid stylesheet development.





## Usage

### Quickstart

1. Clone this repository into your project
2. Install dependencies with `npm install`
3. Set your `src` and `dest` paths in Gulpfile.js
4. `npm run build` to build your stylesheet

### Dependencies

* [**node-sass**](https://github.com/sass/node-sass)
* [**postcss**](https://github.com/postcss/postcss)
	* [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
	* [autoprefixer](https://github.com/postcss/autoprefixer) (optional)
* [**sass-globbing**](https://github.com/chriseppstein/sass-globbing) (optional)





## Features

### Development utilities

**Baseline Grid Overlay**

**Element Overlay**



### Responsive, mobile-first approach
Scarab is designed with a "mobile-first" approach to stylesheet development in mind.

Store named breakpoints in the global [`$BREAKPOINTS`](config/breakpoints.scss) variable for usage with Scarab's helper functions and mixins.

	$BREAKPOINTS: (
		small: 640px,
		medium: 960px,
		large: 1440px
	);

#### Responsive properties
The [`responsive()`](lib/mixins/responsive.scss) mixin provides a convenient way to write declarations for single or multiple CSS properties at different breakpoints.

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
Media query blocks can be created from existing breakpoints using the [`query()`](lib/mixins/query.scss) mixin.

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
Font sizes and line-heights can be conveniently managed with the [`$TYPE-SCALE`](/config/scale.scss) global variable.

The `keys` in `$TYPE-SCALE` accept a Sass map as their values. Pass in a map of *breakpoints to properties* to allow font sizes and line heights to scale at each breakpoint.

	
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
Manage colors and shades with the [`$PALETTES`](/config/palettes.scss) global variable.

**CONFIG**

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
The [`$DURATIONS` and `$EASINGS`](/config/animation.scss) global variables can be used in conjunction with `duration()` and `easing()` to return named values.

**CONFIG**

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
