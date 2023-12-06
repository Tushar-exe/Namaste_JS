

// Ques: What is hoisting in JS ???

/* Ans: Hoisting in js means accesing the variables and function before we have initialized it !!
    the question is how javascript actually able to do it, the answer is whenever we run the program in js a execution context is created and is created in two phases 
*/ 

// For example:


console.log(x); // this will print UNDEFINED on the screen as we're using the variable before declaring and intializing it so js is so beautiful that is print variable x is undefined it will not throw any error
console.log(getName); // this will actually print the function name with the function body 

var x=7;

function getName(){
    console.log("Namaste JavaScript"); // function will print Namaste JavaScript.....
}




