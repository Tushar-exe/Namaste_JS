

// Ques: What is hoisting in JS ???

/* Ans: Hoisting in js means accesing the variables and function before we have initialized it !!
    the question is how javascript actually able to do it, the answer is whenever we run the program in js a execution context is created and is created in two phases 
*/ 

// For example 1:


console.log(x); // this will print UNDEFINED on the screen as we're using the variable before declaring and intializing it so js is so beautiful that is print variable x is undefined it will not throw any error
console.log(getName); // this will actually print the function name with the function body 

var x=7;

function getName(){
    console.log("Namaste JavaScript"); // function will print Namaste JavaScript.....
}

// For example 2:

console.log(x);   // this will print x is not defined will throw error when we execute because  in our code variable x is not present moreover we have not created a memory for it in our code
getName(); // this is used to call the function will print whatever written inside it
console.log(getName); // this will print function just like the function
function getName()
{
    console.log("Namaste JS");
}
