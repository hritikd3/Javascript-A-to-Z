// what is first class function ?

// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Assigning a function to a variable
const test = () => {
  console.log("working");
};
test(); // Invoke it using the variable
// working
// We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

// 2. Passing a function as an argument
function sayHello() {
  return "Hello, ";
}
// Note: The function that we pass as an argument to another function is called a callback function. sayHello() is a callback function.
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!

// We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.

// 3. Returning a function
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
