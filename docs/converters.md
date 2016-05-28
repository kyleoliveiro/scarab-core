# Converters
Converters are functions that convert one unit to another. 

[## bl()](../scss/converters/bl.scss)
Returns a multiple of the `BASELINE` value.

```scss
// bl() requires BASELINE to be defined.
//
// @include define( baseline, 1rem );

.element {
	margin-bottom: bl(2); // 2rem
}
```

## em
Convert a px-based value to em's.

```scss
.element {
	font-size: em(20); // 1.25em
}
```

## rem
Convert a px-based value to rem's.

```scss
.element {
	font-size: rem(32); // 2rem
}
```
