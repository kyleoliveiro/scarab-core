<div align="center" style="text-align:center;">
<img src="https://raw.githubusercontent.com/kyleoliveiro/scarab-core/v7/scarab-logo.svg?sanitize=true" width="128">
<h1>Scarab Core</h1>
<strong>Sass library for rapid stylesheet development</strong>

Design token management · Responsive mixins · Helper functions

[![npm-beta](https://img.shields.io/npm/v/@scarab/core.svg)](https://www.npmjs.com/package/@scarab/core)
[![Build Status](https://travis-ci.org/kyleoliveiro/scarab-core.svg)](ttps://travis-ci.org/kyleoliveiro/scarab-core.svg) 

---

[💿 Installation](#installation)&ensp;·&ensp;[📚 Documentation](#documentation)&ensp;·&ensp;[⭐️ Features](#features)&ensp;·&ensp;[🍃 Ecosystem](#ecosystem)
<br>
[🎉 Motivation](#motivation)&ensp;·&ensp;[❤️ Contributing](#contributing)&ensp;·&ensp;[📃️ License](#license)
</div>

---

## 💿 Installation
1. Install Scarab Core as a dev-dependency:

```bash
# With yarn
$ yarn add @scarab/core -D

# Or with npm
$ npm install @scarab/core --save-dev
```

2. Add `node_modules/` to your Sass [`includePaths`](https://github.com/sass/node-sass#includepaths).

3. Import the Scarab Core library before all other stylesheets:

```scss
// Import the Scarab Library
@import '@scarab/core';

// Write your Sass here...
```


## 📚 Documentation
API documentation and guides:<br>
[**https://scarab.style/core**](https://scarab.style/core)

## ⭐️ Features

### Design token management

Design systems consist of reusable “tokens”. Each token has a name and a value associated with it. Constructing digital interfaces using only the values of tokens that are defined in a design system ensures visual consistency. Scarab provides a simple interface for managing design tokens.

### Helper functions
Provides additional syntactic sugar on top of the default Sass functions.


### Responsive mixins
Simplifies working with breakpoints and media queries.

## 🍃 Ecosystem

In addition to the core library, the following packages are available in the Scarab ecosystem:

| Package name | Description |
| :-- | :-- |
| [**Carapace**](https://github.com/kyleoliveiro/scarab-carapace.git) | Automatically generate CSS utility classes from design tokens. |
| [**Scarab CLI**](https://github.com/kyleoliveiro/scarab-cli.git) | Command-line tools for the Scarab ecosystem. |
| [**Scarab snippets**](https://github.com/kyleoliveiro/scarab-snippets.git) | Scarab snippets for your favorite text editors and IDE's. |

## 🎉 Motivation

### Why another Sass library?
Scarab is the resulting by-product of years of web development work. It's designed and built as a library to manage design tokens and to provide additional syntactic sugar for writing stylesheets.

### Why use Scarab?

- Define design tokens in Sass (ideal since it's a styling language)
- Use tokens in Sass with Scarab, and in HTML with Carapace
- Ability to export design tokens from Sass to JSON
- Written in Sass; No additional dependencies
- Well tested with 100+ unit tests
- Ecosystem of related packages

### Why not just use Sass variables?
Using Sass variables to manage design tokens can be a viable solution for small projects. However, this approach has its limitations. For instance, in Sass, it's not possible to dynamically reference a variable by name. However, this becomes possible if tokens are stored in a Sass map instead of a variable. This opens up many possibilities, and is main impetus behind the Scarab library.

### Alternative libraries
Other options are available, and you should pick one that caters to your project's requirements.

- [Tailwind](https://tailwindcss.com/) — Generates CSS utility classes with short compile time. Requires PostCSS or Tailwind CLI.
- [Tachyons](https://tachyons.io/) — Good for smaller sites that use native CSS variables (a.k.a. custom properties).
- [BassCSS](http://basscss.com/) — Alternative to Tachyons. Also uses CSS variables.
- [Vue DS](https://vueds.com) — Full-featured design system framework for Vue.

### ❤️ Contributing
Issues and feature requests and PR's are welcome!

### 📃️ License
Licensed under MIT. Copyright &copy; Kyle Oliveiro 2018.
