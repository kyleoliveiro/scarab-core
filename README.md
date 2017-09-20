# Scarab

[![npm](https://img.shields.io/npm/v/scarab-scss.svg)](https://www.npmjs.com/package/scarab-scss) [![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=master)](https://travis-ci.org/watchtowerdigital/scarab) 

**Sass utility framework for rapid stylesheet development**
- No style declarations
- Stylesheet configuration
- Responsive property declarations
- Helper mixins
- Development utilities

## [Documentation](https://watchtowerdigital.github.io/scarab)

Documentation source is available in the [`docs/`](docs/) folder.

## Installation
To get started, add Scarab as a dev-dependency in your project via npm:
```
npm install scarab-scss --save-dev
```

Import `scarab-scss` at the beginning of your stylesheet:
```scss
@import 'path/to/node_modules/scarab-scss/scarab';
```

## Features

### No style declarations
Scarab is a utility framework, not a UI library. Importing `scarab-scss` outputs zero CSS.

### Stylesheet configuration
Importing `scarab.scss` creates a new global variable, `$SCARAB` in your Sass project. This is where your stylesheet configuration is stored.

**To configure variables in your stylesheet, use the [`set()`](lib/helpers/set.scss) mixin:**

```scss
/// Set a new value for a key in $SCARAB
///
/// @access public
/// @group helpers
///
/// @require {variable} SCARAB
///
/// @param {arglist} $definition - Definition of the new value

/**
 *
 * set() takes an arglist, $definition as its parameters.
 * The last argument in $definition should be the value that you want to set.
 * Preceding that is a chain of keys in the $SCARAB variable where the value should be set.
 *
 */

// Example:
// Configure stylesheet breakpoints
@include set(breakpoints, (
    small:  600px,
    medium: 900px,
    large:  1300px
));

// Replace the existing value of the 'medium' breakpoint
@include set(breakpoints, medium, 1024px);

// Define a new breakpoint, 'huge', and set its value to 1600px
@include set(breakpoints, huge, 1600px);
```

For more examples of configuration, have a look at the [`#configuration`](https://watchtowerdigital.github.io/scarab/#configuration) section in the docs.

### Responsive property declarations
Declare responsive properties with the [`responsive()`](lib/helpers/responsive.scss) mixin. This allows you to easily manage the appearance of responsive components, and reduce media query clutter in your stylesheet.

```scss
// Example

.button {
    @include responsive((padding-left, padding-right), (
        base:   14px,
        medium: 18px,
        large:  22px
    ));
}
```

```scss
// Output

.button {
    padding-left: 14px;
    padding-right: 14px;
}

// 'medium' breakpoint
@media (min-width: 1024px) {
    .button {
        padding-left: 18px;
        padding-right: 18px;
    }
}

// 'large' breakpoint
@media (min-width: 1300px) {
    .button {
        padding-left: 22px;
        padding-right: 22px;
    }
}
```

### Helper mixins
Scarab provides a bunch of [helper mixins](lib/helpers/) like [`type-scale()`](lib/helpers/type-scale.scss) and [`query()`](lib/helpers/query.scss).

### Development utilities
The [`baseline-grid()`](lib/utilities/baseline-grid.scss) and [`element-overlay()`](lib/utilities/element-overlay.scss) mixins overlay visual guides over the DOM. These help when debugging layout and trying to achieve a consistent vertical rythmn.

## Resources
* [**scarab-carapace**](https://github.com/watchtowerdigital/scarab-carapace.git) — Highly configurable framework for generating functional CSS classes
* [**scarab-styleguide**](https://github.com/watchtowerdigital/scarab-styleguide.git) — Generate automatic styleguides from scarab-carapace configuration
* [**scarab-cli**](https://github.com/watchtowerdigital/scarab-cli.git) — Command-Line Interface for the Scarab Sass ecosystem
* [**scarab-snippets**](https://github.com/watchtowerdigital/scarab-snippets.git) — Sublime Text snippets for the Scarab Sass utility framework
