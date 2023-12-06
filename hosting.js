

// Ques: What is hoisting in JS ???

/* Ans: Hoisting in js means accesing the variables and function before we have initialized it !!
*/ 

// For example:


console.log(x); // this will print UNDEFINED on the screen
console.log(getName); // this will actually print the function name with the function body 

var x=7;

function getName(){
    console.log("Namaste JavaScript");
}