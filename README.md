# Scarab

[![npm](https://img.shields.io/npm/v/scarab-scss.svg)](https://www.npmjs.com/package/scarab-scss) [![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=master)](https://travis-ci.org/watchtowerdigital/scarab) 

Scarab is a Sass utility framework designed for rapid stylesheet development.

## Table of contents
* [Installation](#installation)
* [Configuration](#configuration)
* [Features](#features)
	* [No style declarations](#no-style-declarations)
	* [Variable management](#variable-management)
	* [Responsive property declarations](#responsive-property-declarations)
	* [Responsive typography](#responsive-typography)
	* [Helper mixins](#helper-mixins)
	* [Development utilities](#development-utilities)
* [Documentation](#documentation)

## Installation
To get started, add Scarab as a dev-dependency in your project via npm:
```
npm install scarab-scss --save-dev
```

Import `scarab.scss` at the beginning of your stylesheet:
```scss
@import "path/to/node_modules/scarab-scss/scss/scarab";
```

## Configuration
Importing Scarab creates a new global variable, `$SCARAB` in your Sass project.

**This is where your stylesheet configuration is stored:**

```
$SCARAB: (
	BASELINE:    (),
	BREAKPOINTS: (),
	DURATIONS:   (),
	EASINGS:     (),
	PALETTES:    (),
	TYPEFACES:   (),
	TYPE-SCALE:  ()
);
```

Scarab relies on this variable for most of its functions and mixins to work. It provides some sane defaults, but you should configure these on a per-project basis.

**To configure variables in your stylesheet, use the [`define()`](scss/lib/define.scss) mixin:**

```scss
// Example

// Usage: @include define( $key, $declaration... )
//
// Input a single argument for $declaration to 
// replace the existing value for $key in $SCARAB.
//
//
// Input two arguments for $declaration to define
// a new value in a map, or replace an existing one.

// Create a new key, "BREAKPOINTS", in $SCARAB,
// and set its value to the second argument provided

@include define( breakpoints, (
	"small":    600px,
	"medium":   900px,
	"large":    1300px
) );

// Replace the existing value of the "medium" breakpoint

@include define( breakpoints, "medium", 1024px );

// Define a new breakpoint, "huge", and set its value to 1600px

@include define( breakpoints, "huge", 1600px );
```

For more examples of configuration, have a look at how Scarab's default configuration is defined in [`scss/config/`](scss/config/).

## Features

### No style declarations
Scarab is a utility framework, not a UI library. Therefore simply including the framework outputs zero CSS. Use Scarab to augment development and extend an exisitng UI library for your project, or create your own from scratch.

### Variable management
Easily access and manage your global stylesheet configuration with the `define()`mixin, and [getter functions](scss/getters/) like `palette()`, `duration()`, and `typeface()`.

### Responsive property declarations
Declare responsive properties with the [`responsive()`](scss/helpers/responsive.scss) mixin. This allows you to easily manage the appearance of responsive components, and reduce media query clutter in your stylesheet.

```scss
// Example

.button {
	@include responsive(( padding-left, padding-right ), (
		"base":   14px,
		"medium": 18px,
		"large":  22px
	));
}
```

```scss
// Output

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
Use the [`type-scale()`](scss/helpers/type-scale.scss) mixin to generate typographic styles for an element at each breakpoint specified in the breakpoint map.

```scss
// Example

// config/type-scale.scss
//
// @include define( type-scale, "body", (
// 	 "base":  ( font-size: 0.8rem, line-height: 1.3 ),
// 	 "small": ( font-size: 1rem,   line-height: 1.4 ),
// 	 "large": ( font-size: 1.2rem, line-height: 1.5 )
// ) );

body {
	@include type-scale( body );
}
```
```scss
// Output

body {
	font-size: 0.8rem;
	line-height: 1.3;
}

// "small" breakpoint
@media (min-width: 40em) {
	body {
		font-size: 1rem;
		line-height: 1.4;
	}
}

// "large" breakpoint
@media (min-width: 90em) {
	body {
		font-size: 1.2rem;
		line-height: 1.5;
	}
}
```

### Helper mixins
Scarab also provides a bunch of other [helpers mixins](scss/helpers/) like [`transitions()`](scss/helpers/transitions.scss) and [`query()`](scss/helpers/query.scss). More are planned in the future.

### Development utilities
Included are the [`baseline-grid()`](scss/utilities/baseline-grid.scss) and [`element-overlay()`](scss/utilities/element-overlay.scss) mixins, which overlay visual guides on top of the DOM. These help with achieving a consistent vertical rythmn.

## Documentation
Documentation is under development and is available in [`docs/`](/docs/).
