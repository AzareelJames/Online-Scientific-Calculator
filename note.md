# Description:

### Welcome to Online Scientific Calculator!
<p>Used with eval() in JavaScript</p>

<h3 style="color: orange;">WARNING!!!!</h3>
<p style="color: orange;">DO NOT USE eval() FOR INPUT LIKE THIS:</p>
<p style="color: orange;">eval(prompt(`Dangerous Code!`))</p>

## Rules & Syntax:

1. Do not make a number with `()`: `2763(3)` JavaScript thinks a Number is not a function
2. Complete `()`: Please enclose the function like sin( to sin(), Otherwise JS will throw an Error
3. Do not combine variables: Do not combine like this: `πe` JavaScript will throw a ReferenceError
4. `A` is an ANSWER: The default of `A` is `NaN`, When you calculate something the Number can be stored inside `A`
5. Can't Calculate `//`: Because it's a comment in JavaScript, and the calculator don't calculate.
6. Dividing by 0: If you divide any number by zero, you get this: `#=TOO BIG TO COUNT!!`
7. Dividing 0 by 0: If you divide 0 by 0, you get this: `Not a Number`
8. Square rooting by -1: If you try one, it's the same as rule #7. `Not a Number`
9. Log function has 2 arguments (number, base): The OG of base is `10`, use a comma `,` to go to the next argument