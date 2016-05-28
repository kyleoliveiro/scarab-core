# Getters
Getters are functions that return a value from the global `$SCARAB` variable. To make the most of these functions, be sure to [define your stylesheet configuration](#configuration) on a per-project basis.

## global
Returns a value of a key in $SCARAB. This is useful if you want to use Scarab variables with other Sass plugins.

```scss
$my-breakpoints: global( breakpoints );

@debug $my-breakpoints;

//	(
//		'small':	600px,
//		'medium':	1024px,
//		'large':	1300px,
//		'huge':		1600px
//	)
```

## breakpoint
Returns a breakpoint value from `BREAKPOINTS`.

```scss
@media (max-width: breakpoint(small)) { // @media (max-width: 600px)
	...
}
```

## duration
Returns a duration value from `DURATIONS`.

```scss
.element {
	transition-duration: duration();	// duration(default) => 0.4s
	transition-delay: duration(long);	// 1.2s
}
```

## easing
Returns an easing value from `EASINGS`.

```scss
.element {
	transition-timing-function: easing(ease-in-out-circ);	// cubic-bezier(0.785, 0.135, 0.15, 0.86)
}
```

## palette
Returns a color from `PALETTES`.

```scss
.element {
	background-color: palette(black);	// #000000
	color: palette(light grey);			// #e0e0e0
}
```

## typeface
Return a typeface value from `TYPEFACES`.

```scss
.element {
	font-family: typeface(primary);	// sans-serif
}
```
