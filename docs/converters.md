# Converters
Converters are functions that convert one unit to another, or transform a value in a predictable manner. 

## bl
**Returns a multiple of the global `baseline` value**

```scss
.element {
	margin-bottom: bl(2); // 2rem
}
```

`Source: `[`/scss/converters/bl.scss`](../scss/converters/bl.scss)



## em
**Converts a px-based value to em's**

```scss
.element {
	font-size: em(20); // 1.25em
}
```

`Source: `[`/scss/converters/em.scss`](../scss/converters/em.scss)



## rem
**Converts a px-based value to rem's**

```scss
.element {
	font-size: rem(32); // 2rem
}
```

`Source: `[`/scss/converters/rem.scss`](../scss/converters/rem.scss)



## negative
**Converts a number, numbers in a list, or numbers in values of a map, to negative numbers**

```scss
$number: 10px;
$number: negative($number); // -10px;

$list: (1, 2rem, 30px);
$list: negative($list);     // (-1, -2rem, -30px);

$map: (
	a: 1,
	b: (1, 2rem, 30px)
);
$map: negative($map);       // ( a: -1, b: (-1, -2rem, -30px) );
```

`Source: `[`/scss/converters/negative.scss`](../scss/converters/negative.scss)



## strip-units
**Strips units from a number**

```scss
$number: 10px;
$number: strip-units(10px); // 10
```

`Source: `[`/scss/converters/strip-units.scss`](../scss/converters/strip-units.scss)
