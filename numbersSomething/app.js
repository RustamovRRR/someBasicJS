// js is loosely typed - don't declare type

const number = 34;
console.log(number);

let anotherNumb = 23.23;
console.log(anotherNumb);
anotherNumb = "js";
console.log(anotherNumb);

let number1 = 45;
let number2 = 15;
let add = number1 + number2;
console.log(add);
let sub = number1 - number2;
console.log(sub);
let mult = number1 * number2;
console.log(mult);
let div = number1 / number2;
console.log(div);

// += -= /= *= ++ -- %

let testNumber = 50;
testNumber += 5;
console.log(testNumber);
testNumber -= 5;
console.log(testNumber);
testNumber *= 5;
console.log(testNumber);
testNumber /= 5;
console.log(testNumber);
testNumber++;
console.log(testNumber);
testNumber--;
console.log(testNumber);

const slices = 10;
const children = 3;
const leftover = slices % children;
console.log(leftover);
