# Scarab
**Sass utility framework for rapid stylesheet development**

[![npm](https://img.shields.io/npm/v/scarab-scss.svg)](https://www.npmjs.com/package/scarab-scss) [![Build Status](https://travis-ci.org/watchtowerdigital/scarab.svg?branch=master)](https://travis-ci.org/watchtowerdigital/scarab) 

## [Documentation](http://scarab.style)
Documentation source is available in the [`docs/`](docs/) folder.

## Features

|    | Feature | Description |
|:--:| :------ | :---------- |
| 🎨 | **Stylesheet inventory** | Store and retrieve common values used in your stylesheet |
| 🤖 | **CSS generator mixins** | Generate CSS using values in your stylesheet inventory |
| 🎈 | **Responsive properties** | Supports media queries and responsive properties |
| 📄 | **Reset & Normalize** | Optional CSS reset and normalize |
| 💎 | **Pure Sass functions** | Pure functions for writing Sass quickly |

## Installation

Add Scarab as a dev dependency to your project:

```
npm install scarab-scss --save-dev
```

## Getting Started

Add your `node_modules` folder to your Sass [`includePaths`](https://github.com/sass/node-sass#includepaths).

Then, import `scarab.scss` at the beginning of your `main.scss` file:

```scss
@import 'scarab-scss/scarab';

// Your scss here...
```

## Resources
* [**scarab-carapace**](https://github.com/watchtowerdigital/scarab-carapace.git) — Collection of Scarab modules for generating functional CSS classes
* [**scarab-styleguide**](https://github.com/watchtowerdigital/scarab-styleguide.git) — Generate automatic styleguides from scarab-carapace configuration
* [**scarab-cli**](https://github.com/watchtowerdigital/scarab-cli.git) — Command-Line Interface for the Scarab Sass ecosystem
* [**scarab-snippets**](https://github.com/watchtowerdigital/scarab-snippets.git) — Sublime Text snippets for the Scarab Sass utility framework
