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
//      small:  600px,
//      medium: 1024px,
//      large:  1300px,
//      huge:   1600px
//  ) );

$my-breakpoints: get( breakpoints );

@debug $my-breakpoints;

//  (
//      small:  600px,
//      medium: 1024px,
//      large:  1300px,
//      huge:   1600px
//  )

$small-breakpoint: get( breakpoints, small );

@debug $small-breakpoint; // 600px
```

`Source: `[`/scss/getters/get.scss`](../scss/getters/get.scss)



## get-keys
**Return a list of keys from a configuration map in `$SCARAB`**

`@function get-keys( $map-name, [$dedupe] )`

```scss
// my-config/breakpoints.scss
//
// @include set( breakpoints, (
//      small:  600px,
//      medium: 1024px,
//      large:  1300px,
//      huge:   1600px
//  ) );

$breakpoint-names: get-keys( breakpoints );

@debug $breakpoint-names;

//  small, medium, large, huge
```



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
//      short:  0.25s,
//      medium: 0.5s,
//      long:   1s
//  ) );
//
// @include set( durations, default, duration(short) );

.element {
    transition-duration: duration();    // duration(default) => 0.25s
    transition-delay: duration(long);   // 1.0s
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
//      ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86),
//      ...
//  ) );
//

.element {
    transition-timing-function: easing(ease-in-out-circ);   // cubic-bezier(0.785, 0.135, 0.15, 0.86)
}
```

`Source: `[`/scss/getters/easing.scss`](../scss/getters/easing.scss)



## opacity
**Returns an opacity value from the `opacity` configuration map**

`@function opacity( [$opacity] )`

```scss
// my-config/opacity.scss
//
// @include set( opacity, (
//      opaque:      1,
//      translucent: 0.8
//      ...
//  ) );
//

.element {
    opacity: opacity(translucent); // 0.8
}
```

`Source: `[`/scss/getters/opacity.scss`](../scss/getters/opacity.scss)



## palette
**Returns a color from `palettes` configuration map**

`@function palette( [$color] )`

```scss
// my-config/palettes.scss
//
// @include set( palettes, (
//      grey: (
//          light: #EEEEEE
//          base:  #D0D0D0
//          dark:  #404040
//      )
//      ...
//  ) );
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



## border-width
**Return a border-width value from `border-widths` configuration map**

`@function border-width( [$border-width] )`

```scss
// my-config/border-widths.scss
//
// @include set-default( border-widths, (
//     s: 1px,
//     m: 2px,
//     l: 3px,
//     0: 0
// ) );

.element {
    border: border-width(m) solid black; // 2px solid black
}
```

`Source: `[`/scss/getters/border-width.scss`](../scss/getters/border-width.scss)



## font-size
**Return a font-size value from `font-sizes` configuration map**

`@function font-size( [$font-size] )`

```scss
// my-config/font-sizes.scss
//
// @include set-default( font-sizes, (
//     title:      rem(38),
//     heading:    rem(30),
//     subheading: rem(24),
//     ...
// ) );

.element {
    font-size: font-size(heading); // rem(30) => 1.875rem
}
```

`Source: `[`/scss/getters/font-size.scss`](../scss/getters/font-size.scss)



## font-weight
**Return a font-weight value from `font-weights` configuration map**

`@function font-weight( [$font-weight] )`

```scss
// my-config/font-weights.scss
//
// @include set-default( font-weights, (
//     light:    300,
//     normal:   400,
//     semibold: 500,
//     ...
// ) );

.element {
    font-weight: font-weight(semibold); // 500
}
```

`Source: `[`/scss/getters/font-weight.scss`](../scss/getters/font-weight.scss)



## line-height
**Return a line-height value from `line-height` configuration map**

`@function line-height( [$line-height] )`

```scss
// my-config/line-height.scss
//
// @include set( line-heights, (
//     title:      bl(3.00),
//     heading:    bl(2.50),
//     subheading: bl(2.00),
// ) );

.element {
    line-height: line-height(heading); // bl(2.5)
}
```

`Source: `[`/scss/getters/line-height.scss`](../scss/getters/line-height.scss)



## tracking
**Return a tracking value from `tracking` configuration map**

`@function tracking( [$tracking] )`

```scss
// my-config/tracking.scss
//
// @include set( tracking, (
//      tight: -0.25em,
//      loose: 0.5em,
// ) );

.element {
    letter-spacing: tracking(loose); // 0.5em
}
```

`Source: `[`/scss/getters/tracking.scss`](../scss/getters/tracking.scss)



## typeface
**Return a typeface value from `typefaces` configuration map**

`@function typeface( [$typeface] )`

```scss
// my-config/typefaces.scss
//
// @include set( typefaces, (
//     primary:   ( 'Roboto', sans-serif ),
//     secondary: ( 'Courier', monospace )
// ) );

.element {
    font-family: typeface(primary); // 'Roboto', sans-serif
}
```

`Source: `[`/scss/getters/typeface.scss`](../scss/getters/typeface.scss)



## radius
**Return a radius value from `radii` configuration map**

`@function radius( [$radius] )`

```scss
// my-config/radii.scss
//
// @include set( radii, (
//     0:    0,
//     s:    3px,  
//     m:    6px,
//     pill: 10000px,
//     100:  100%
// ) );

.element {
    border-radius: radius(s); // 3px
}
```

`Source: `[`/scss/getters/radius.scss`](../scss/getters/radius.scss)



## shadow
**Return a shadow value from `shadows` configuration map**

`@function shadow( [$shadow] )`

```scss
// my-config/shadows.scss
//
// @include set( shadows, (
//     0:      none,
//     subtle: 0 1px 2px rgba(0, 0, 0, 0.2),
//     heavy:  0 2px 4px 2px rgba(0, 0, 0, 0.4)
// ) );

.element {
    box-shadow: shadow(subtle); // 0 1px 2px rgba(0, 0, 0, 0.2)
}
```

`Source: `[`/scss/getters/shadow.scss`](../scss/getters/shadow.scss)



## x
**Returns a horizontal sizing map from the `x` configuration map**

`@function x( [$size], [$breakpoint] )`

```scss
// my-config/sizing.scss
//
// @include set( x, (
//     s: (
//         base:   0.5rem,
//         medium: 0.75rem,
//         large:  1rem
//     ),
//     m: (
//         base:   1rem,
//         medium: 1.5rem,
//         large:  2rem
//     ),
//     l: (
//         ...
//     )
// ) );

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
