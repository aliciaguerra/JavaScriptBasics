#JavaScript Operators
<b>Arithmetic Operators</b><br>
JavaScript has the arithmetic operators "+", "-", "*", "/", and "%". These operators function as an addition, subtraction, multiplication, division, and modulus operators, and operate very similarly to other languages. <br>
var a=12+5; <br>
var b=12-5; <br>
var c=12 * 5; <br>
var d=12/5; <br>
var e=12%5; <br>
Some mathematical operations, such as dividing by zero, cause the returned variable to be one of the error values - for
example, infinity, or NaN. <br>
The return value of the modulus operator maintains the sign of the first operand. <br>
The + and - operators also have unary versions, where they only operate on one variable. When used in this fashion, + returns
the number representation of the object, while - returns its negative counterpart. <br>
var a="1"; <br>
var b=a; //b="1": a string <br>
var c= +a; //c=1:a number <br>
var d= -a; //d=-1: a number <br>
"+" is also used as a string concatenation operator: If any of its arguments is a string or is otherwise not a number, any non-string arguments are converted to strings, and the two strings are concatenated. For example, 5+[1,2,3] evaluates to the
string "51, 2, 3". More usefully, str1 + "" + str2 returns str1 concatenated with str2, with a space between. <br>
All other arithmetic operators will attempt to convert their arguments into numbers before evaluating. Note that unlike C or
Java, the numbers and their operation results are not guaranteed to be integers. <br>
<b>Bitwise Operators</b> <br>
There are seven bitwise operators: "&", "|", "^", "~", ">>", "<<", and ">>>". <br>
These operators convert their operands to integers (truncuating any floating point to zero), and perform the specified bitwise
operation on them. The logical bitwise operators, "&", "|", and "^", perform the and, or, and xor on each individual bit and provides the return value. The ~ ("not operator) inverts all bits within the integer, and usually appears in combination with the logical bitwise operators. <br>
Two bit-shift operators, ">>", "<<", move the bits in one direction that has a similar effect to multiplying or dividing by
a power of two. The final bit shift operator, ">>>", operates the same way, but does not preserve the sign bit when shifting. <br>
These operators are kept for parity with related programming languages, but are unlikely to be used in most JavaScript programs.
<br>
<b>Assignment Operators</b><br>
The assignment operator "=" assigns a value to a variable. Primitive types, such as strings and numbers are assigned directly,
however function and object names are just pointers to the respective function or object. In this case, the assignment operator 
only changes the reference rather than the object itself. For example, after the following code is executed, "0, 1, 0" will be alerted, even though setA was passed to the alert, and setB was changed. This is, because they are two references to the same object. <br>
`setA=[1,0,0];` <br>
`setB=setA;` <br>
`setB[2]=0;` <br>
`alert(setA);` <br>

