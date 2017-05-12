# Getters
Getters are functions that return a value from the `$SCARAB` global variable.

To make the most of these functions, be sure to [define your stylesheet configuration](https://github.com/watchtowerdigital/scarab#configuration) on a per-project basis.

## get
**Returns a value of a key in `$SCARAB`**

`@function get( [$key...] )`

```scss
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

`Source: `[`/lib/getters/get.scss`](../lib/getters/get.scss)



## get-keys
**Return a list of keys from a configuration map in `$SCARAB`**

`@function get-keys( $map-name, [$dedupe] )`

```scss
@include set( breakpoints, (
     small  : 600px,
     medium : 1024px,
     large  : 1300px,
     huge   : 1600px
 ) );

@debug get-keys(breakpoints);
    // ( small, medium, large, huge )
```


## palette
**Returns a color from `get(palettes)`**

`@function palette( $color )`

```scss
@include set( palettes, (
    grey: (
        light : #EEEEEE,
        null  : #D0D0D0,
        dark  : #404040
    ),
    ...
) );

.element {
    background-color: palette(light grey);          // #EEEEEE
    color: palette(dark grey);                      // #404040

    &:hover {
        color: palette(grey); // palette(null grey) => #D0D0D0
    }
}
```

`Source: `[`/lib/getters/palette.scss`](../lib/getters/palette.scss)
