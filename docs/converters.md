# Converters
Converters are functions that convert one unit to another, or transform a value, or set of values in a predictable manner.

## bl
**Return a multiple of `get(baseline)`**

```scss
@include set( baseline, 1rem );

.element {
	margin-bottom: bl(2); // 2rem
}
```

`Source: `[`/lib/converters/bl.scss`](../lib/converters/bl.scss)



## em
**Convert a px-based value to em**

```scss
.element {
	font-size: em(20); // 1.25em
}
```

`Source: `[`/lib/converters/em.scss`](../lib/converters/em.scss)



## rem
**Convert a px-based value to rem**

```scss
.element {
	font-size: rem(32); // 2rem
}
```

`Source: `[`/lib/converters/rem.scss`](../lib/converters/rem.scss)



## negative
**Convert a value, list, or map of values to negative value(s)**

```scss
$number: 10px;
$number: negative($number); // -10px;

$list: (1, -2rem, 30px);
$list: negative($list);     // (-1, -2rem, -30px);

$map: (
	a: 1,
	b: (1, -2rem, 30px)
);
$map: negative($map);       // ( a: -1, b: (-1, -2rem, -30px) );
```

`Source: `[`/lib/converters/negative.scss`](../lib/converters/negative.scss)



## strip-units
**Convert a unit-based value to a unitless one**

```scss
$number: 10px;
$number: strip-units(10px); // 10
```

`Source: `[`/lib/converters/strip-units.scss`](../lib/converters/strip-units.scss)



## str-replace
**Replace substrings within a string**

```scss
$string: 'Beetle';
$string: str-replace($string, 'e');      // Btl

$string: 'Beetle';
$string: str-replace($string, 'e', '3'); // B33tl3
```

`Source: `[`/lib/converters/str-replace.scss`](../lib/converters/str-replace.scss)
