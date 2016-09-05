# Helpers
Helper mixins and functions perform more complex operations with minimal code.

## set
**Set the value of a key in $SCARAB**

The `set()` mixin allows you to configure your stylesheet with global variables. 

`@mixin set( $key, $value )`

```scss
// Example Usage:

@include set( baseline, 1.25rem );

@include set( type-scale, subheading, (
	 base:  ( font-size: bl(0.8), line-height: bl(1)   ),
	 small: ( font-size: bl(1),   line-height: bl(1.5) ),
	 huge:  ( font-size: bl(1.2), line-height: bl(2)   )
) );
```

`Source: `[`/scss/helpers/set.scss`](../scss/helpers/set.scss)



## set-default
**Set the value of a key in $SCARAB only if there is no value currently defined**

`@mixin set-default( $key, $value )`

```scss

@include set-default( baseline, 1rem );
@debug get(baseline) // 1rem

@include set( baseline, 1.25rem );
@debug get(baseline) // 1.25rem

@include set-default( baseline, 1rem ); // Will not work, since a value already exists
@debug get(baseline) // 1.25rem
```

`Source: `[`/scss/helpers/set-default.scss`](../scss/helpers/set-default.scss)



## query
**Wraps declarations within a media query block**

`@mixin query( $query )`

```scss
// Example

@include query( small ) {
	body {
		background-color: grey;
	}
}

@include query( below medium ) {
	.navigation {
		display: none;
	}
}

@include query( medium to huge ) {
	.page-title {
		font-size: 3rem;
	}
}
```
```scss
// Output

@media (min-width: 600px) {
    body {
        background-color: grey
    }
}
@media (max-width: 1024px) {
    .navigation {
        display: none
    }
}
@media all and (min-width: 1024px) and (max-width: 1600px) {
    .page-title {
        font-size: 3rem
    }
}
```



## responsive
**Applies property declarations to an element at different named breakpoints**

`@mixin responsive( $properties, $breakpoint-map )`

```scss
// Example

.button {
	@include responsive(( padding-left, padding-right ), (
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



## transitions
**Applies multiple transition declarations to an element**

`@mixin transitions( $property-map )`

```scss
// Example

a {
  	@include transitions( (
		color: 1s 0.5s linear,
		background-color: 0.25s ease-out
	) );
}
```
```scss
// Output

a {
  transition: color 1s 0.5s linear, background-color 0.25s ease-out;
}
```



## type-scale
**Applies `font-size` and `line-height` declarations to an element at different named breakpoints**

`@mixin type-scale( $size )`

```scss
// Example

// config/type-scale.scss
//
// @include set( type-scale, subheading, (
// 	 base:  ( font-size: 0.8rem, line-height: 1.3 ),
// 	 small: ( font-size: 1rem,   line-height: 1.4 ),
// 	 huge:  ( font-size: 1.2rem, line-height: 1.5 )
// ) );

.subheading, h2 {
	@include type-scale( subheading );
}
```
```scss
// Output

.subheading, h2 {
	font-size: 0.8rem;
	line-height: 1.3;
}

// 'small' breakpoint
@media (min-width: 600px) {
	.subheading, h2 {
		font-size: 1rem;
		line-height: 1.4;
	}
}

// 'huge' breakpoint
@media (min-width: 1600px) {
	.subheading, h2 {
		font-size: 1.2rem;
		line-height: 1.5;
	}
}
```



## random-color
**Returns random color**

`@function random-color( )`

```scss
body {
	background-color: random-color(); // Background color will be randomized each time the pre-processor runs
}
```

`Source: `[`/scss/helpers/random-color.scss`](../scss/helpers/random-color.scss)
