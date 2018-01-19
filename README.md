# Scarab
**Sass framework for rapid stylesheet development**  

[![npm-beta](https://img.shields.io/npm/v/scarab-scss/beta.svg)](https://www.npmjs.com/package/scarab-scss)
[![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=v7)](https://travis-ci.org/watchtowerdigital/scarab?branch=v7) 

---

## Features

- [**🎨 Stylesheet inventory**](#stylesheet-inventory) — Store and retrieve reusable values in your design system
- [**💎 Pure functions**](#pure-functions) — Functional programming in Sass
- [**🎈 Responsive helpers**](#responsive-helpers) — Media queries and responsive properties
- [**📐 Typographic scale**](#typographic-scale) — Vertical rhythm and responsive typography
- [**📝 CSS ruleset generator**](#css-ruleset-generator) — Generate CSS using values in your stylesheet inventory
- [**🍃 Scarab ecosystem**](#scarab-ecosystem) — Add-on modules for Scarab

## Installation

With npm:

```
npm i scarab-scss@beta --save-dev
```

With yarn:

```
yarn add scarab-scss@beta --dev
```

## Getting started

Add your `node_modules` folder to your Sass [`includePaths`](https://github.com/sass/node-sass#includepaths).

Then, import Scarab at the start of your `main.scss` file:

```scss
@import 'scarab-scss/scarab';

// Your scss here...
```

## API Documentation 
[**http://scarab.style**](http://scarab.style)

---

## Stylesheet inventory
Modern scalable UI's are born from design systems, consisting of pre-defined, reusable values. The stylesheet inventory is an interface for managing reusable values in your project.

### Storing values
Use the **`set()`** mixin to store a value in the inventory:
```scss
// Set a single value
@include set(font-size, xl, 4rem);

// Set multiple values at once
@include set(color, (
  black: #000000,
  white: #ffffff,
  blue:  (
    _: #0000ff,
    1: #3333ff,
    2: #6666ff
  )
));
```

**`set()`** is also available as a function. You can invoke it by assigning the function to a dummy variable:
```scss
$_: set(font-size, xl, 4rem);

$_: set(color, (
  black: #000000,
  white: #ffffff,
  blue:  (
    _: #0000ff,
    1: #3333ff,
    2: #ccccff
  )
));
```

### Retrieving values
To apply a value in your stylesheet, use the **`get()`** function:

```scss
.element {
  font-size: get(font-size, xl);   // 4rem
  color: get(color, blue, 2);      // #ccccff
  background: get(color, blue, _); // #0000ff
}
```

**For cleaner a syntax, use [inventory helper functions](http://scarab.style/#4_inventory-helpers):**
```scss
.element {
  font-size: fz(xl);   // 4rem
  color: c(blue, 1);   // #3333ff
  
  // `c()` returns the value of the `default-key` if only 1 argument is provided
  background: c(blue); // #0000ff
}
```

## Pure functions
Sass provides many useful functions but sometimes, these aren't enough. Scarab extends Sass with pure functions that abstract away common Sass operations into a small, single-purpose functions.

For example, the **`map-flatten()`** function takes a single Sass map as input, and outputs a flattened map:

```scss
map-flatten(('blue': ('_': #0000ff, '1': #3333ff, '2': #ccccff)));
// => ('blue': #0000ff, 'blue-1': #3333ff, 'blue-2': #ccccff)
```

The full list of functions, together with examples, is available in the [**API documentation**](http://scarab.style/#5_functions-function).

## Responsive helpers
Scarab supports a mobile-first approach to UI development.

### Breakpoints
Configure breakpoints in the stylesheet inventory. You should pick a naming convention that scales with the number of values you have:

```scss
@include set(breakpoint, (
  small:  500px,
  medium: 850px,
  large:  1100px,
  huge:   1400px
));
```
 Breakpoint values can be retrieved with the **`bp()`** function:

```scss
@media all and (min-width: bp(small)) {
  // ...
}
```
### Media queries
The **`query()`** mixin is a convenience method for writing media query blocks:

```scss
@include query(small) {
/*
  Equivalent to:
  @media (min-width: 500px)
*/
}

@include query(until medium) {
/*
  Equivalent to:
  @media (max-width: 850px)
*/
}

@include query(medium to large) {
/*
  Equivalent to:
  @media (min-width: 850px) and (max-width: 1100px)
*/
}
```

### Responsive properties
The **`responsive()`** mixin can apply property-value declarations for multiple breakpoints at once. It accepts a property name or list of property names as the first argument, and a map of breakpoints to property values as the second argument.

```scss
.hero {
  @include responsive(text-align, (
    _: center,
    small: left,
    large: right
  ));

  /*
    Output:

    text-align: center;

    @media (min-width: 500px) {
      text-align: left;
    }

    @media (min-width: 1100px) {
      text-align: right;
    }
  */
}
```

## Typographic scale
Scarab lays the groundwork for establishing vertical rhythm on your webpages using a responsive type scale. 

### Vertical rhythm
To achieve vertical rhythm, ensure that the inventory `baseline` is `set` to an appropriate length. Use the **`bl()`** function to keep height-based values in your stylesheet to a multiple of the `baseline` value:

```scss
@include set(baseline, 0.8rem);

h1 {
  line-height: bl(8);   // 5.6rem
  margin-bottom: bl(2); // 1.6rem
}
```

### Responsive type
The **`type-scale()`** mixin generates responsive `font-size` and `line-height` properties. To use it, ensure that your inventory `font-size` and `line-height` values share the same names. Use a key name of **`_`** to denote the base value.

If a certain font-size should not be responsive, set its value to a Number instead of a Map.

```scss
@include set(font-size, (
  xs: 0.65rem,

  xl: (
    _: 2.5rem,
    medium: 4rem,
  ),
  l:  (
    _: 1.5rem,
    medium: 2rem
  ),
  m:  1rem,
  s:  0.8rem,
  xs: 0.65rem
));

@include set(line-height, (
  xl: (
    _: bl(4),
    medium: bl(8),
  ),
  l:  (
    _: bl(2.5),
    medium: bl(3)
  ),
  m:  bl(2),
  s:  bl(1.5),
  xs: bl(1)
));
```

Use the **`type-scale()`** mixin to output the responsive type properties.

```scss
h1 {
  @include type-scale(xl);

/*
  Output:

  font-size: 2.5rem;
  line-height: bl(4);
  
  @media (min-width: 850px) {
    font-size: 4rem;
    line-height: bl(8); 
  }
*/
}

p {
  @include type-scale(m);

  /*
    Output:

    font-size: 1rem;
    line-height: bl(2);
  */
}
```

## CSS ruleset generator

### Scarab modules
You can define **`modules`** in Scarab which can then be used to programmatically generate CSS rulesets. Modules must contain a `root`, and optionally: `values`, `breakpoints`, and `states`.

Here's an simple example using Scarab modules with the **`css-ruleset`** mixin which outputs responsive, stateful classes for a utility class that turns an element's `color` to `red`.


```scss
// Define a module
@include set(module, 'color-red', (
  root: 'red',
  breakpoints: (s, m),
  states: (hover, focus)
));

// Generate the ruleset
@include css-ruleset(module(color-red)) {
  color: red;
}

/*
  Output: (Scarab escapes special characters in generated CSS class names)

  .red { color: red; }
  .hv\(red\):hover { color: red; }
  .fc\(red\):focus { color: red; }

  @media (min-width: 100px) {
    .s\(red\) { color: red; }
    .s\(hv\(red\)\):hover { color: red; }
    .s\(fc\(red\)\):focus { color: red; }
  }

  @media (min-width: 200px) {
    .m\(red\) { color: red; }
    .m\(hv\(red\)\):hover { color: red; }
    .m\(fc\(red\)\):focus { color: red; }
  }
*/
```

You can also set module `values` and then loop over the values, generating a ruleset for each one:

```scss
// Define a module
@include set(module, 'color-utils', (
  root: 'color',
  values: (
    red:   #ff0000,
    green: #00ff00,
    blue:  #0000ff
  ),
  breakpoints: (s, m),
  states: (hover, focus)
));

// Loop over each value and generate a ruleset
@each $key, $value in module(color-utils, values) {
  @include css-ruleset(
    $module: color-utils,
    $modifier: $key
  ) {
    color: $value;
  }
}
```

### Custom naming convention
To use a custom naming convention with Scarab, configure the `namescheme` global option. Refer to the [documentation](http://scarab.style/#variable-__SCARAB_OPTIONS) for details.

## Scarab ecosystem
* [**Carapace**](https://github.com/watchtowerdigital/scarab-carapace.git) — Scarab modules for generating functional CSS classes from your stylesheet inventory
* [**Scarab CLI**](https://github.com/watchtowerdigital/scarab-cli.git) — Command-Line Interface for the Scarab ecosystem
* [**Scarab Styleguide**](https://github.com/watchtowerdigital/scarab-styleguide.git) — Automatically generate styleguides from your Scarab stylesheet inventory
* [**Scarab Snippets**](https://github.com/watchtowerdigital/scarab-snippets.git) — Sublime Text snippets for Scarab
