#Variable Declaration
Vairables are commonly explicitly declared by the var statement, as shown below:<br>
var c; <br>
The above variable is created, but has the default value of undefined. To be of value, the variable needs
to be initialized: <br>
var c=0; <br>
After being declared, a variable may be assigned a new value that will replace the old one: <br>
c=1; <br>
But make sure to declare a variable with var before (or while) assigning to it; otherwise you will create a "scope bug".

#Primitive Types
Primitive types are types provided by the system, in this case by JavaScript. Primitive types for JavaScript are booleans,
numbers, and text. In addition to the primitive types, users may define their own classes. <br>

The primitive types are treated by JavaScript as value types and when you pass them around they go as values. Some values, such
as strings, allow method calls. 

#Boolean Type
Boolean types can have only two possible variables, true or false. <br>
var mayday=false;  <br>
var birthday=true; <br>

#Numeric Types
You can use integer and double types on your variables, but they are treated as a numeric type. <br>
var sal=20; <br>
var pal=12.1; <br>

#String Types
The string and char types are all strings, so you can build any string literal you wished for. <br>
var myName="Some name"; <br>
var myChar='f'; <br>

#Complex Types
A complex type is an object, be it either standard or custom made. Its home is the heap and goes everywhere by reference. <br>

<b>Array Type</b> <br>
In JavaScript, all arrays are untyped, so you can put everything you want in an array and worry about that later. Arrays are
objects, they have methods and properties you can invoke at will. For example, the .length property indicates how many properties are currently in the array. If you add more items to the array, the value of the .length gets larger. You can build yourself an array by using the statement new followed by the Array, as shown below. <br>
var myArray=new Array(0,2,4); <br>
var myOtherArray=new Array(); <br>
Arrays can also be created with the array notation, which uses square brackets: <br>
var myArray=[0,2,4]; <br>
var myOtherArray=[]; <br>
Arrays are accessed using the square brackets: <br>
myArray[2]="Hello"; <br>
var text=myArray[2]; <br>
There is a limit to the number of items that can be stored in the array. <br>
<b>Object Types</b> <br>
An object within JavaScript is created using the new operator: <br>
var<myObject>=new Object(); <br>
Objects can also be created with the object notation, which uses curly braces: <br>
var myObject={}; <br>
JavaScript objects can be built using inheritance and overriding, and you can use polymorphism. There
are no scope modifiers, with all the properties and methods having public access. <br>
You can access browser built-in objects and provided through browser JavaScript extensions.
