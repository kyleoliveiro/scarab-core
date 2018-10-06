# Scarab
**Sass framework for rapid stylesheet development.**  

[![npm-beta](https://img.shields.io/npm/v/scarab-scss/beta.svg)](https://www.npmjs.com/package/scarab-scss)
[![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=v7)](https://travis-ci.org/watchtowerdigital/scarab?branch=v7) 

- [💿 Installation](#installation)
- [📚 Documentation](#documentation)
- [⭐️ Features](#features)
- [🍃 Ecosystem](#ecosystem)
- [🎉 Motivation](#motivation) 
- [❤️ Contributing](#contributing)
- [📃️ License](#license)

---

## 💿 Installation
**Add Scarab as a dev-dependency in your project:**

```bash
# With yarn
$ yarn add scarab-scss -D

# With npm
$ npm install scarab-scss --save-dev
```

**Import the Scarab library before your other stylesheets:**

```sass
@import 'scarab-scss/scarab';

// Write your Sass here...
```


## 📚 Documentation
**API Documentation and guides:**<br>
[**https://scarab.style/docs/**](https://scarab.style/docs)

## ⭐️ Features

### 🎨 Design token management
Design systems consist of reusable key-value pairs called "tokens". Constructing user interfaces using only values defined by design tokens ensures visual consistency. Scarab provides a simple interface for managing design tokens.

**Set and get design tokens**:

```sass
// Define tokens in a config file
// e.g. `src/scss/config/spacing.scss`
@include set(spacing, (
  xs: 0.25rem,
  s:  0.5rem,
  m:  1rem,
  l:  1.5rem,
  xl: 2.5rem
));

// Use tokens in other stylesheets
.my-component {
  margin-top: spacing(s); // 0.5rem
  marbin-bottom: s(xs);   // 0.25rem (Shorthand helper function)
}
```

<details>
<summary><strong>Design token reference</strong></summary>
| Token | Helper | Shorthand |
| :-- | :-- | :-- |
| [Baseline](https://scarab.style/docs/tokens/baseline) | `baseline()` | `bl()` |
| [Breakpoints](https://scarab.style/docs/tokens/breakpoints) | `breapoint()` | `bp()` |
| [Colors](https://scarab.style/docs/tokens/colors) | `color()` | `c()` |
| [Gradients](https://scarab.style/docs/tokens/gradients) | `gradient()` | `g()` |
| [Opacities](https://scarab.style/docs/tokens/opacities) | `opacity()` | `o()` |
| [Background images](https://scarab.style/docs/tokens/background-images) | `background-image()` | `bgi()` |
| [Letter spacings](https://scarab.style/docs/tokens/letter-spacings) | `letter-spacing()` | `ls()` |
| [Line heights](https://scarab.style/docs/tokens/line-heights) | `line-height()` | `lh()` |
| [Font families](https://scarab.style/docs/tokens/font-families) | `font-family()` | `ff()` |
| [Font sizes](https://scarab.style/docs/tokens/font-sizes) | `font-size()` | `fs()` |
| [Font styles](https://scarab.style/docs/tokens/font-styles) | `font-style()` | `fst()` |
| [Font weights](https://scarab.style/docs/tokens/font-weights) | `font-weight()` | `fw()` |
| [Line styles](https://scarab.style/docs/tokens/line-styles) | `line-style()` | `lns()` |
| [Line widths](https://scarab.style/docs/tokens/line-widths) | `line-width()` | `lnw()` |
| [Spacing](https://scarab.style/docs/tokens/spacing) | `spacing()` | `s()` |
| [Durations](https://scarab.style/docs/tokens/durations) | `duration()` | `dur()` |
| [Easings](https://scarab.style/docs/tokens/easings) | `easing()` | `ease()` |
| [Border radiuses](https://scarab.style/docs/tokens/border-radiuses) | `border-radius()` | `radius()` |
| [Box shadows](https://scarab.style/docs/tokens/box-shadows) | `box-shadow()` | `bsh()` |
| [Text shadows](https://scarab.style/docs/tokens/text-shadows) | `text-shadow()` | `tsh()` |
| [Wrapper widths](https://scarab.style/docs/tokens/wrapper-widths) | `wrap()` | — |
| [Text measures](https://scarab.style/docs/tokens/text-measures) | `measure()` | — |
| [Coordinates](https://scarab.style/docs/tokens/coordinates) | `coordinate()` | — |
| [Grids](https://scarab.style/docs/tokens/grids) | `flex-grid()` | — |
| [Aspect ratios](https://scarab.style/docs/tokens/aspect-ratios) | `ratio()` | — |
| [Angles](https://scarab.style/docs/tokens/angles) | `angle()` | — |
| [Animations](https://scarab.style/docs/tokens/animations) | `keyframe()` | — |
</details><br/>

You can also define custom tokens if needed. Custom tokens can be retrieved with the `get()` function:

**Defining custom tokens:**
```sass
@include set(custom-token, (
  token-1: 'value-1'
  token-2: 'value-2'
  token-3: 'value-3'
));

.my-component {
  ::before {
    content: get(custom-token, token-2); // 'value-2';
  }
}
```

### 💎 Helper functions
Scarab provides a library of helper functions in addition to the inventory helpers mentioned above. These helpers provide additional syntactic sugar on top of the [default Sass functions](http://sass-lang.com/documentation/Sass/Script/Functions.html).

<details>
<summary><strong>Unit / type helpers</strong></summary>
<br>

| Name | Description |
| :--  | :-- |
| `em()` | Converts `px` to `em`. |
| `rem()` | Converts `px` to `rem`. |
| `is-null()` | Checks if the specified value is null. |
| `to-length()` | Adds a unit to a value. ??? |
| `to-negative()` | Converts a number, list, or map of values to negative value(s). |
| `to-number()` | Converts a value to a number. |
| `to-string()` | Converts a value to a string. |
| `type-check()` | Performs type checks on values. |
| `unit-convert()` | Converts units of a value. ??? |
| `unit-strip()` | Strips units from a value. ??? |
</details>

<details>
<summary><strong>String helpers</strong></summary>
<br>

| Name | Description |
| :--  | :-- |
| `str-append()` | Appends to a string. |
| `str-compare()` | Compares two strings or numbers to determine which comes first. |
| `str-contains()` | Escapes CSS special characters within a string. |
| `str-escape()` | Escapes CSS special characters within a string. |
| `str-prepend()` | Prepends to a string. |
| `str-remove()` | Removes a substring within a string. |
| `str-replace()` | Replaces a substring within a string. |
</details>

<details>
<summary><strong>List helpers</strong></summary>
<br>

| Name | Description |
| :--  | :-- |
| `list-append()` | Adds values to the end of a list. |
| `list-contains()` | Checks if a list contains the specified value. |
| `list-each()` | Calls a function on each item in a list. |
| `list-every()` | Checks if the result of calling a given function on every item in a list is true. |
| `list-prepend()` | Adds value(s) to the start of a list. |
| `list-remove()` | Finds and removes value(s) from a list. |
| `list-replace()` | Finds and replaces value(s) in a list. |
| `list-reverse()` | Reverses the order of values in a list. |
| `list-sort()` | Sorts items in a list. |
| `list-unique()` | Removes duplicate values from a list. |
</details>

<details>
<summary><strong>Map helpers</strong></summary>
<br>

| Name | Description |
| :--  | :-- |
| `map-append()` | Adds a single key-value pair onto the end of a map. |
| `map-each-key()` | Calls a function on each key in a map. |
| `map-each-value()` | Calls a function on each value in a map. |
| `map-flatten()` | Flattens a map one-level deep. |
| `map-get-key()` | Returns the key(s) in a map associated with a given value. |
| `map-prepend()` | Adds a single key-value pair onto the start of a map. |
| `map-stringify-keys-deep()` | Converts all keys in a map to strings, including keys of nested maps. |
| `map-stringify-keys()` | Converts direct keys of a map to strings. |
| `map-unique()` | Removes key-value pairs from a map which contain duplicate values. |
</details>

<details>
<summary><strong>CSS class helpers</strong></summary>
<br>

| Name | Description |
| :--  | :-- |
| `class-espace()` | Escapes a string for use as a CSS class name. |
| `class-sanitize()` | Removes `selector-format` placeholders from a string. |
| `class-template()` | Returns the result of hydrating the `selector-format` with given values. |
</details>

<details>
<summary><strong>Utilities</strong></summary>
<br>

| Name | Description |
| :--  | :-- |
| `get-function-safe()` | Safely calls native get-function(). Intended for use with natice call(). |
| `random-color()` | Returns a random color. |
| `throw()` | Throws an error. |
</details>

### 🎈 Responsive mixins
Media queries and responsive properties.

<details>
<summary><strong>Media queries</strong></summary>

The **`query()`** mixin defines styles within a media query block:

```sass
// Define breakpoints in a config file
// e.g. `src/config/breakpoints.scss`
@include set(breakpoint, (
  tablet:  768px,
  desktop: 1280px,
  cinema:  1600px
));

// Use the `query()` mixin in other stylesheets
.my-component {
  // @media (min-width: 768px)
  @include query(tablet) {
    background-color: white;
  }

  // @media (min-width: 768px)  [Same as above]
  @include query(from tablet) {
    background-color: white;
  }

  // @media (min-width: 769px)
  @include query(above tablet) {
    background-color: lightgrey;
  }
  
  // @media (max-width: 768px)
  @include query(until tablet) {
    background-color: lightgrey;
  }

  // @media (max-width: 767px)
  @include query(below tablet) {
    background-color: grey;
  }
  
  // @media (min-width: 768px) and (max-width: 1280px)
  @include query(tablet to desktop) {
    background-color: black;
  }
}
```
</details>

<details>
<summary><strong>Responsive properties</strong></summary>
The **`responsive()`** mixin lets you define values of proprties at specific breakpoints:

```sass
// Declare a single responsive property
.my-component {
  @include responsive(color, (
    _ :      white, // Viewport width > 0px
    desktop: black, // Viewport width > 1280px
  ))
}

// Declare a multiple responsive properties of tbe same value
.my-component {
  @include responsive((margin-bottom, margin-top), (
    _ :     1rem,   // Viewport width > 0px
    tablet: 1.5rem, // Viewport width > 768px
    cinema: 2rem    // Viewport width > 1600px
  ))
}
```
</details>

<details>
<summary><strong>Responsive typographic scale</strong></summary>
The `type-scale()` mixin generates font size and line height declarations within its parent block.

```sass
// Define font size and line height tokens in a config file
// e.g. `src/config/typography.scss`
@include set(font-size, (
  s: 1rem,
  m: 2rem,
  l: (
    _:       3rem,
    desktop: 4rem
  )
));

@include set(line-hight, (
  small: 1.5rem,
  body: 3rem,
  headline: (
    _:       4.5rem,
    desktop: 6rem
  )
));

// Use the `type-scale()` mixin in other stylesheets
.my-component {
  @include type-scale(small);

  // font-size: 1rem;
  // line-height: 1.5rem;
}

.another-component {
  @include type-scale(headline);

  // font-size: 3rem;
  // line-height: 4.5rem;
  //
  // @media (min-width: 1280px) {
  //   font-size: 4rem;
  //   line-height: 6rem;
  // }
}
```
</details>

### 🍃 Ecosystem

In addition to the core library, the following packages are available in the Scarab ecosystem:

| Package | Description |
| :-- | :-- |
| [**Carapace**](https://github.com/watchtowerdigital/scarab-carapace.git) | Automatically generate CSS utility classes from design tokens. |
| [**Scarab snippets**](https://github.com/watchtowerdigital/scarab-snippets.git) | Snippets for your favourite text editors and IDE's. |
| [**Scarab CLI**](https://github.com/watchtowerdigital/scarab-cli.git) | Command-line tools for the Scarab ecosystem. |

### 🎉 Motivation
Scarab is a byproduct of years of web development work. It's designed and built as a library to manage design tokens and to provide an additional layer of CSS syntactic sugar.

**Why use Scarab?**

- Design token framework plus optional debugging
- Ability to export design tokens from Sass to JSON
- Written in Sass, no additional dependencies required
- Well tested with 100+ unit tests
- Ecosystem of related packages

Other options are available, and you should pick one that caters to your project's requirements.

<details>
<summary><strong>Alternative libraries</strong></summary>

| Library | Description |
| :-- | :-- |
| Tailwind | ... |
| Tachyons | ... |
| BassCSS | ... |
| Vue DS | ... |
</details>

### ❤️ Contributing
Issues and feature/pull requests are welcome!

### 📃️ License
Lincesed under MIT. Copyright &copy; Kyle Oliveiro 2018.
