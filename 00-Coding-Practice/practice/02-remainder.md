# Remainder

## Instructions

write a single `remainder` function that takes in two numbers (the numerator and denominator).
the function should divide the two numbers and return the result with a remainder using this format: `#r#`

## Examples

10 / 3 = 3 with a remainder of 1

therefore:

`remainder(10, 3)` should return `"3r1"`

`remainder(6, 2)` should return `"3r0"`

`remainder(205, 11)` should return `"18r7"`

`remainder(5, 8)` should return `"0r5"`

## Hint

you will need to use the modulus (`%`) operator.

## Bonus

have it return `"ERROR"` when it receives bad input or either of the two numbers are less than or equal to 0.
