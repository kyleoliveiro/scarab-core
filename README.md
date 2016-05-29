# Scarab

[![npm](https://img.shields.io/npm/v/scarab-scss.svg)](https://www.npmjs.com/package/scarab-scss) [![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=master)](https://travis-ci.org/watchtowerdigital/scarab) 

Scarab is a Sass utility framework designed for rapid stylesheet development.

## Table of contents
* [Installation](#installation)
* [Configuration](#configuration)
* [Features](#features)
	* [Variable management](#variablemanagement)
	* [Responsive typography](#responsivetypography)
	* [Helper mixins](#helpermixins)
	* [Development utilities](#developmentutilities)
* [Documentation](#documentation)

## Installation
To get started, add Scarab as a dev-dependency in your project via npm:
```shell
npm install scarab-scss --save-dev
```

Import `scarab.scss` at the beginning of your stylesheet:
```scss
@import 'node_modules/scarab-scss/scss/scarab';
```

## Configuration
Importing Scarab creates a new global variable, `$SCARAB` in your Sass project. This is where your stylesheet configuration is stored.

```
$SCARAB: (
	BASELINE: 		(),
	BREAKPOINTS: 	(),
	DURATIONS: 		(),
	EASINGS: 		(),
	PALETTES: 		(),
	TYPEFACES: 		(),
	TYPE-SCALE: 	()
);
```

Scarab relies on this variable for most of its functions and mixins to work. It provides some sane defaults, but you should configure these on a per-project basis.

To configure variables in your project, use the [`define()`](scss/lib/define.scss) mixin:

```scss
// Usage: @include define( $key, $declaration... )

// single argument for $declaration replaces
// the existing value for $key in $SCARAB

@include define( breakpoints, (
	'small':	600px,
	'medium':	900px,
	'large':	1300px
) );


// two arguments for $declaration defines a new
// value in a map or replaces an existing one

@include define( breakpoints, 'medium', 1024px );
@include define( breakpoints, 'huge', 1600px );
```

For more examples of configuration, have a look at how Scarab's default configuration is defined in [`scss/config/`](scss/config/).

## Features

### Variable management
Easily access and manage your global stylesheet configuration with `define()` and [getter functions](scss/getters/) like `palette()`, `duration()`, and `typeface()`.

### Responsive properties
Reduce media query clutter with the [`responsive()`](scss/helpers/responsive.scss) mixin.

```scss
.button {
	@include responsive(( padding-left, padding-right ), (
		'base': 	14px,
		'medium': 	18px,
		'large': 	22px
	));
}
```

```scss
.button {
	padding-left: 14px;
	padding-right: 14px;
}

// `small` breakpoint
@media (min-width: 40em) {
	.button {
		padding-left: 18px;
		padding-right: 18px;
	}
}

// `large` breakpoint
@media (min-width: 90em) {
	.button {
		padding-left: 22px;
		padding-right: 22px;
	}
}
```

### Responsive typography
The [`type-scale()`](scss/helpers/type-scale.scss) mixin generates typographic styles for an element for each breakpoint specified in the `TYPE-SCALE` map.

```scss
@include define( type-scale, 'body', (
	'base': 	( font-size: 0.8rem, 	line-height: 1.3 ),
	'small': 	( font-size: 1rem, 		line-height: 1.4 ),
	'large': 	( font-size: 1.2rem, 	line-height: 1.5 )
) );

body {
	@include type-scale('body');
}
```
```scss
body {
	font-size: 0.8rem;
	line-height: 1.3;
}

// `small` breakpoint
@media (min-width: 40em) {
	body {
		font-size: 1rem;
		line-height: 1.4;
	}
}

// `large` breakpoint
@media (min-width: 90em) {
	body {
		font-size: 1.2rem;
		line-height: 1.5;
	}
}
```

### Helper mixins
Scarab also provides a bunch of other helpers mixins like [`transitions()`](scss/helpers/transitions.scss) and [`query()`](scss/helpers/query.scss).

### Development utilities
Included are the [`baseline-grid()`](scss/utilities/baseline-grid.scss) and [`element-overlay()`](scss/utilities/element-overlay.scss) mixins, which overlay visual guides on top of the DOM. These help with achieving a consistent vertical rythmn.

## Documentation
Documentation is under development and is available in [`docs/`](/docs/).
