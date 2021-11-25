// Callback Functions and Higher Order Functions
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function

// Higher Order Functions - accepts another function as an argument or returns another function as a result

//Callback functions - passed to another function as an argument and executed inside the function

function morning(name) {
  return `Good Morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good Afternoon ${name.toUpperCase()}`;
}
function evening(name) {
  return `Good Evening ${name.toUpperCase()}`;
}

function greet(name, cbFunction) {
  const myName = "Federico";

  console.log(`${cbFunction(name)}. My name is ${myName}`);
}

greet("Alex", morning);
greet("Anna", afternoon);
greet("Maria", evening);
