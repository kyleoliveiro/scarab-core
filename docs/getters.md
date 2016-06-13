# Getters
Getters are functions that return a value from the `$SCARAB` global variable.

To make the most of these functions, be sure to [define your stylesheet configuration](https://github.com/watchtowerdigital/scarab#configuration) on a per-project basis.

## get
**Returns a value of a key in $SCARAB**

This is useful if you want to use Scarab variables with other Sass plugins, or if you intend to define custom keys in $SCARAB.

```scss
$my-breakpoints: get( breakpoints );
@debug $my-breakpoints;

//	(
//		'small':	600px,
//		'medium':	1024px,
//		'large':	1300px,
//		'huge':		1600px
//	)
```

`Source: `[`/scss/getters/get.scss`](../scss/getters/get.scss)



## breakpoint
**Returns a breakpoint value from the `breakpoints` configuration map**

```scss
@media (max-width: breakpoint(small)) { // @media (max-width: 600px)
	...
}
```

`Source: `[`/scss/getters/breakpoint.scss`](../scss/getters/breakpoint.scss)



## duration
**Returns a duration value from the `durations` configuration map**

```scss
.element {
	transition-duration: duration();	// duration(default) => 0.4s
	transition-delay: duration(long);	// 1.2s
}
```

`Source: `[`/scss/getters/duration.scss`](../scss/getters/duration.scss)



## easing
**Returns an easing value from the `easings` configuration map**

```scss
.element {
	transition-timing-function: easing(ease-in-out-circ);	// cubic-bezier(0.785, 0.135, 0.15, 0.86)
}
```

`Source: `[`/scss/getters/easing.scss`](../scss/getters/easing.scss)



## palette
**Returns a color from `palettes` configuration map**

```scss
.element {
	background-color: palette(black);	// #000000
	color: palette(light grey);			// #e0e0e0
}
```

`Source: `[`/scss/getters/palette.scss`](../scss/getters/palette.scss)



## typeface
**Return a typeface value from `typefaces` configuration map**

```scss
.element {
	font-family: typeface(primary);	// sans-serif
}
```

`Source: `[`/scss/getters/typeface.scss`](../scss/getters/typeface.scss)



## x
**Returns a horizontal sizing map from the `x` configuration map**

```scss
.element {
	// Passes the 'large' horizontal sizing map to the responsive() mixin
	@include responsive( (margin-left, margin-right), x(l) );
}
```

`Source: `[`/scss/getters/x.scss`](../scss/getters/x.scss)



## y
**Returns a vertical sizing breakpoint map from the `y` configuration map**

```scss
.element {
	// Passes the 'default' vertical sizing map to the responsive() mixin
	@include responsive( (padding-top, padding-bottom), y() );
}
```

`Source: `[`/scss/getters/y.scss`](../scss/getters/y.scss)
