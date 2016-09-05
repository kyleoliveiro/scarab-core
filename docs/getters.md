# Getters
Getters are functions that return a value from the `$SCARAB` global variable.

To make the most of these functions, be sure to [define your stylesheet configuration](https://github.com/watchtowerdigital/scarab#configuration) on a per-project basis.

## get
**Returns a value of a key in $SCARAB**

This is useful if you want to use Scarab variables with other Sass plugins, or if you intend to define custom keys in $SCARAB.

`@function get( [$key...] )`

```scss
// my-config/breakpoints.scss
//
// @include set( breakpoints, (
//		small:  600px,
//		medium: 1024px,
//		large:  1300px,
//		huge:   1600px
//	) );

$my-breakpoints: get( breakpoints );

@debug $my-breakpoints;

//	(
//		small:  600px,
//		medium: 1024px,
//		large:  1300px,
//		huge:   1600px
//	)

$small-breakpoint: get( breakpoints, small );

@debug $small-breakpoint; // 600px
```

`Source: `[`/scss/getters/get.scss`](../scss/getters/get.scss)



## breakpoint
**Returns a breakpoint value from the `breakpoints` configuration map**

`@function breakpoint( [$breakpoint] )`

```scss
@media ( max-width: breakpoint(small) ) { // @media (max-width: 600px)
	...
}
```

`Source: `[`/scss/getters/breakpoint.scss`](../scss/getters/breakpoint.scss)



## duration
**Returns a duration value from the `durations` configuration map**

`@function duration( [$duration] )`

```scss
// my-config/durations.scss
//
// @include set( durations, (
//		short:  0.25s,
//		medium: 0.5s,
//		long:   1s
//	) );
//
// @include set( durations, default, duration(short) );

.element {
	transition-duration: duration();	// duration(default) => 0.25s
	transition-delay: duration(long);	// 1.0s
}
```

`Source: `[`/scss/getters/duration.scss`](../scss/getters/duration.scss)



## easing
**Returns an easing value from the `easings` configuration map**

`@function easing( [$easing] )`

```scss
// my-config/easings.scss
//
// @include set( easings, (
//		ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86),
//      ...
//	) );
//

.element {
	transition-timing-function: easing(ease-in-out-circ);	// cubic-bezier(0.785, 0.135, 0.15, 0.86)
}
```

`Source: `[`/scss/getters/easing.scss`](../scss/getters/easing.scss)



## palette
**Returns a color from `palettes` configuration map**

`@function palette( [$color] )`

```scss
// my-config/palettes.scss
//
// @include set( palettes, (
//		grey: (
//			light: #EEEEEE
//			base:  #D0D0D0
//			dark:  #404040
//		)
//      ...
//	) );
//

.element {
	background-color: palette(light grey); // #EEEEEE
	color: palette(dark grey); // #404040

	&:hover {
		color: palette(grey); // palette(base grey) => #D0D0D0
	}
}
```

`Source: `[`/scss/getters/palette.scss`](../scss/getters/palette.scss)



## typeface
**Return a typeface value from `typefaces` configuration map**

`@function typeface( [$typeface] )`

```scss
// my-config/typefaces.scss
//
// @include set( typefaces, (
//		primary:   ( 'Roboto', sans-serif ),
//		secondary: ( 'Courier', monospace )
//	) );

.element {
	font-family: typeface(primary);	// 'Roboto', sans-serif
}
```

`Source: `[`/scss/getters/typeface.scss`](../scss/getters/typeface.scss)



## x
**Returns a horizontal sizing map from the `x` configuration map**

`@function x( [$size], [$breakpoint] )`

```scss
// my-config/sizing.scss
//
// @include set( x, (
//		s: (
//			base:   0.5rem,
//			medium: 0.75rem,
//			large:  1rem
//		),
//		m: (
//			base:   1rem,
//			medium: 1.5rem,
//			large:  2rem
//		),
//		l: (
//			...
//		)
//	) );

.element {
	// Return the 'medium' horizontal sizing value at the 'large' breakpoint
	@debug x(m, large); // 2rem

	// Pass the 'small' horizontal sizing map to the responsive() mixin
	@include responsive( (margin-left, margin-right), x(s) );
}
```

`Source: `[`/scss/getters/x.scss`](../scss/getters/x.scss)



## y
**Returns a vertical sizing breakpoint map from the `y` configuration map**

`@function y( [$size], [$breakpoint] )`

```scss
.element {
	// Passes the 'default' vertical sizing map to the responsive() mixin
	@include responsive( (padding-top, padding-bottom), y() );
}
```

`Source: `[`/scss/getters/y.scss`](../scss/getters/y.scss)
