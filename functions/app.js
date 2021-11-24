// Functions - declare, invoke

//declare a function
function hello() {
  console.log("Hello John");
  console.log("Hello Alice");
  console.log("Hello Anna");
}

//invoke the function
hello();

//invoke again the function
hello();

//you can invoke the function as how many times as you want
hello();

//params -when declare/define
//placeholders, local vars
//arguments- when invoke/call/run
//use vars/values, multiple params, undefined

var nameRobert = "Robert";
function helloPerson(name) {
  console.log(`hello ${name}`);
}

//if you dont add any argument you will see undefined
helloPerson();

//using argument
helloPerson(nameRobert);

//you can add as many params as you want in the function

function helloWithTwoParam(firstName, lastName) {
  console.log(`hello my friend ${firstName} ${lastName}`);
}

//invoke the function
helloWithTwoParam("Michael", "Owen");

console.log("-------------- Return --------------------");

//using return
//default undefined, shortcuts, ignores after

//all function by default return undefined

let wallHeight = 100;
let wallWidth = 200;
// 1inch = 2.54cm

function calculate(valueInch) {
  const valueCM = valueInch * 2.54;
  return valueCM;
}

wallHeight = calculate(wallHeight);
wallWidth = calculate(wallWidth);

const dimension = [wallHeight, wallWidth];

console.log(dimension);

//return ignores after code block

console.log("----------- Function Expressions ------------------");

// expressions - another way define a function
// create a variable, assign to a function, use variable
// diff - hoisting, use - arrow func, labraries

function addNumbers(num1, num2) {
  return num1 + num2;
}

const firstValue = addNumbers(3, 4);
const secondValue = addNumbers(13, 14);

const add = function (num1, num2) {
  return num1 + num2;
};

const values = [firstValue, secondValue, add(10, 11)];
console.log(values);
