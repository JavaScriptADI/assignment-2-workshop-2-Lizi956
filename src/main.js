let myString = "Example";
console.log(myString);


console.log("Type of '5':", typeof "5"); 
console.log("Type of 5:", typeof 5);



let myNumber = 15;
console.log(myNumber);let myBoolean = true;
console.log(myBoolean);



console.log(5 > 3); // true
console.log(5 === "5"); // false


let helloString = "Hello";
console.log(helloString.toUpperCase());


let worldString = "World";
console.log(worldString.toLowerCase());


Before calling toUpperCase(): "Hello"
	After calling toUpperCase(): Still "Hello"





    let text;
    console.log(text);
    
    
    The value of text is undefined because it was declared but not assigned any value.



    let text = 'Hello';
console.log(text.toLowercase());


The error is in the method name toLowercase(). JavaScript is case-sensitive, and the correct method is toLowerCase().






The problem is that prompt() returns a string, so adding 1 results in string concatenation instead of arithmetic addition.


let age = parseInt(prompt('How old are you?'));
let nextAge = age + 1;
console.log(Next year you will be ${nextAge});



let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age <= 69;
console.log(${name} is in sixties: ${isInSixties});



the final value is 6


the value of y/x after both console.log is 6





		x++ is the post-increment operator. It increments the value of x by 1, but returns the value before the increment.
		x-- is the post-decrement operator. It decrements the value of x by 1, but returns the value before the decrement.

++x is the pre-increment operator. It increments the value of x by 1 and then returns the incremented value.
	x++ is the post-increment operator. It returns the value of x first, and then increments it.

let x;
console.log(x);  



let a = 5;
let b = '5';
console.log(a == b);  


let a = 5;
let b = '5';
console.log(a != b);  


let a = 'Hello';
let b = 5;
console.log(a + b);


