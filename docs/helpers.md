# Helpers
Helper mixins and functions perform more complex operations with minimal code.

## set
**Set the value of a key in $SCARAB**

The `set()` mixin allows you to configure your stylesheet with global variables. 

`@mixin set( $key, $value )`

```scss
// Example Usage:

@include set( baseline, 1.25rem );

@debug get(baseline);
    // 1.25rem

@include set( breakpoints, (
    small  : 600px,
    medium : 1024px,
    large  : 1300px,
    huge   : 1600px
 ) );

@debug get(breakpoints);
    //  (
    //      small  : 600px,
    //      medium : 1024px,
    //      large  : 1300px,
    //      huge   : 1600px
    //  )

@debug get(breakpoints, small);
    // 600px
```

`Source: `[`/lib/helpers/set.scss`](../lib/helpers/set.scss)



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

`Source: `[`/lib/helpers/set-default.scss`](../lib/helpers/set-default.scss)



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



## random-color
**Returns random color**

`@function random-color( )`

```scss
body {
    background-color: random-color(); // Background color will be randomized each time the pre-processor runs
}
```

`Source: `[`/lib/helpers/random-color.scss`](../lib/helpers/random-color.scss)



## dedupe
**Return a map with keys containing duplicate values removed**

If a map contains key-value pairs with multiple values, the first key in the map is retained, and the other duplicates are removed.

`@function dedupe( $map )`

```scss
$colors: (
    blue:  #0000ff,
    brand: #0000ff,
    red:   #ff0000,
    green: #00ff00
);

@debug dedupe($colors);

// DEBUG: (
//    blue:  #0000ff,
//    red:   #ff0000,
//    green: #00ff00
// );
```
`Source: `[`/lib/helpers/dedupe.scss`](../lib/helpers/dedupe.scss)



## stringify-keys
**Returns a map with stringified keys**

Scarab utilizes this function under the hood with the `set()` function. This ensures that variables defined with the `set()` function are retrievable with `get()` regardless of whether they have been set with or without quotes.

`@function stringify-keys( $map )`

```
// Example

$map: (
    0:   0,
    one: 1,
    tw0: two
);

@each $key, $val in $map {
    @debug type-of($key);
}

// DEBUG: number
// DEBUG: string
// DEBUG: string

$stringified-map: stringify-keys($map);

@each $key, $val in $stringified-map {
    @debug type-of($key);
}

// DEBUG: string
// DEBUG: string
// DEBUG: string
```
`Source: `[`/lib/helpers/stringify-keys.scss`](../lib/helpers/stringify-keys.scss)
