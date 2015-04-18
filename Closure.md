#JavaScript Closures
JavaScript variables can belong to the local or global scope. Private variables can be made possible with closures.

#Global Variables
A function can access all variables defined inside the function, like this:
```
function myFunction() {
var a=4;
return a*a;
}
```
But a function can also access variables defined outside the function, like this:
```
var a=4;
function myFunction() {
return a*a;
}
```
In the last example, a is a global variable. <br>
In a web page, global variables belong to a window object. <br>
Global variables can be used (and changed) by all scripts in the page (and in the window). <br>
In the first example, a is a local variable. <br>
A local variable can only be used inside the function where it is defined. It is hidden from other functions
and other scripting code. <br>
Global and local variables with the same name are different variables. Modifying one does not modify the other. <br>

#Variable Lifetime
Global variables live as long as your application (your window/web page) lives. <br>
Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

#A Counter Dilemma
Suppose you want to use a variable for counting something, and you want this counter to be available for all functions. <br>
You could use a global variable, and a function to increase the counter.
```
var counter=0;
function add() {
counter+=1;
add();
add();
add();
//the counter is now equal to 3
}
```
The counter should only be changed by the add() function. The problem is, that any script on the page can change the counter 
without calling add(): <br>
```
function add(){
var counter=0;
counter+=1;
}
add();
add();
add();
//the counter should now be 3, but it does not work!
```
It does not work! Every time I call the add() function, the counter is set to 1. <br>
A JavaScript linear function can solve this.

#JavaScript Nested Functions
All functions have access to the global scope. <br>
In fact, in JavaScript, all functions have access to the scope "above" them. <br>
In this example, the inner function plus() has access to the counter variable in the parent function:
```
function(){
var counter=0;
function plus() {counter+=1;}
plus();
return counter;
}
```
This could have solved the counter dilemma, if we reach the plus() function from the outside. <br>
We also need a way to execute counter=0 only once. <br>
We need a closure. <br>
