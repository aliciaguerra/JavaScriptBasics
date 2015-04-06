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
Java, the numbers and their operation results are not guaranteed to be integers. <br><br>
<b>Bitwise Operators</b> <br>
There are seven bitwise operators: "&", "|", "^", "~", ">>", "<<", and ">>>". <br>
These operators convert their operands to integers (truncuating any floating point to zero), and perform the specified bitwise
operation on them. The logical bitwise operators, "&", "|", and "^", perform the and, or, and xor on each individual bit and provides the return value. The ~ ("not operator) inverts all bits within the integer, and usually appears in combination with the logical bitwise operators. <br>
Two bit-shift operators, ">>", "<<", move the bits in one direction that has a similar effect to multiplying or dividing by
a power of two. The final bit shift operator, ">>>", operates the same way, but does not preserve the sign bit when shifting. <br>
These operators are kept for parity with related programming languages, but are unlikely to be used in most JavaScript programs.
<br><br>
<b>Assignment Operators</b><br>
The assignment operator "=" assigns a value to a variable. Primitive types, such as strings and numbers are assigned directly,
however function and object names are just pointers to the respective function or object. In this case, the assignment operator 
only changes the reference rather than the object itself. For example, after the following code is executed, "0, 1, 0" will be alerted, even though setA was passed to the alert, and setB was changed. This is, because they are two references to the same object. <br>
`setA=[1,0,0];` <br>
`setB=setA;` <br>
`setB[2]=0;` <br>
`alert(setA);` <br>
Similarly, after the next bit of code is executed, x is a pointer to an empty array. <br>
`z=[5];` <br>
`x=z;` <br>
`z.pop();` <br>
All of the above operators have corresponding assignment operators of the form operator=. For example, x operator=y is just a convenient abbreviation for x=x operator y. <br>
<table>
<tr>
<td>Arithmetic</td>
<td>Logical</td>
<td>Shift</td>
</tr>
<tr>
<td>+=</td>
<td>&=</td>
<td>>>=</td>
</tr>
<tr>
<td>-=</td>
<td>=</td>
<td>>>=</td>
</tr>
<tr>
<td>/=</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%=</td>
<td></td>
<td></td>
</tr>
</table>
<br>
For example, a common use of += is in a for loop
`var els=document.getElementsbyTagName('h2');` <br>
`var i;` <br>
`for(i=0; i<else.length; i+=1){` <br>
`//dosomething with els[i]` <br>
`}` <br><br>
<b>Increment Operators</b><br>
There are also the increment and decrement operators, ++ and --. a++ increments a and returns the old value of a. ++a increments a and returns the new value of a. The decrement operator functions similarly, but decrements the variable instead.
<br>As an example, all three lines will perform the same task: <br>
`var a=1;`  <br>
`a=a+1;`      <br>
`a+=1;` <br>
`++a;` <br><br>
<b>Pre and Post Increment Operations</b><br>
Increment operations may be applied before or after a variable. When they are applied before and after a variable, they are
pre-increment or post-increment operators respectively. The choice of which to use affects how they affect operations. <br>
`//increment occurs before a is assigned to b` <br>
`var a=1;` <br>
`var b= ++a; //a=2, b=2` <br>
`// increment occurs to c after c is assigned to d` <br>
`var c=1;` <br>
`var d=c++; //c=2, d=1` <br>
Due to the possibly confusing nature of pre and post increment behavior, code can be easier to read, if the increment operations are avoided. <br>
`Increment occurs before a is assigned to b` <br>
`var a=b;` <br>
`a+=1;` <br>
`var b=a; //a=2, b=2` <br>
`//increment occurs to c after c is assigned to d` <br>
`var c=1;` <br>
`var d=c;` <br>
`c+=1; //c=2, d=1` <br><br>
<b>Comparison Operators</b><br>
The comparison operators determine, if the two operands meet the given condition. <br>
<table>
<tr>
<td>Operator</td>
<td>Returns</td>
<td>Notes</td>
</tr>
<tr>
<td>==</td>
<td>true, if the operands are equal</td>
<td>may ignore operand's type (e.g. a string as an integer) </td>
</tr>
<tr>
<td>===</td>
<td>true, if the operands are identical</td>
<td>does not ignore operand's types,and only returns true if they are the same type and value</td>
</tr>
<tr>
<td>!=</td>
<td>true, if the two operands are not equal</td>
<td>may ignore an operand's type (e.g. a string as an integer)</td>
</tr>
<tr>
<td>!==</td>
<td>true, if the two operands are not identical</td>
<td>does not ignore the operand's types, and only returns true if they are the same type and value</td>
</tr>
<tr>
<td>></td>
<td>true, if the operand is greater than the second one</td>
<td></td>
</tr>
<tr>
<td>>=</td>
<td>true, if the first operand is greater than or equal to the second one</td>
<td></td>
</tr>
<tr>
<td><</td>
<td>true, if the first operand is less than the second time</td>
<td></td>
</tr>
<tr>
<td><=</td>
<td>true, if the first operand is less than or equal to the second</td>
<td></td>
</tr>
</table><br>
Be careful when using "==" and "!=", as they may ignore the type of one of the terms being compared. This can lead to strange and non-intuitive situations such as: <br>
`0=='' // true` <br>
`0=='0' // true` <br>
`false=='false' //false; ("Boolean to string")` <br>
`false=='0' //true; ("Boolean to string)` <br>
`false=undefined //false` <br>
`false==null // false ("Boolean to null")` <br>
`false==undefined // true` <br>
For stricter compares use === and !=== <br>
`0==='' // false` <br>
`0==='0' // false` <br>
`false === 'false' // false` <br>
`false === '0' // false` <br>
`false === undefined // false` <br>
`false === null // false` <br>
`null === undefned // false` <br><br>

<b>Logical Operators</b><br>
&& - and <br>
|| - or <br>
! - not <br>
The logical operators are and, or, and not. The && and ||  operators accept two operands and provides their associated logical result, while the third accepts one, and returns its logical negation. && and || short circuit operators. If the result is guaranteed after evaluation of the first operand, it skips evaluation of the second operand. <br>
Technically, the exact return value of these two operators is also equal to the final operand that is evaluated.
