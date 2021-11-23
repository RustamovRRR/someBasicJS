//JavaScript has implicit type conversion
let number1 = "12";
let number2 = "24";
let result = number1 - number2;
console.log(result);
result = number1 * number2;
console.log(result);
result = number1 / number2;
console.log(result);

//here addition is concatination in string
result = number1 + number2;
console.log(result);

//a solution way
number1 = parseInt(number1);
number2 = parseInt(number2);
result = number1 + number2;
console.log(result);

//7 data types
// Primitives - string, number, boolean, null, undefined, symbol
// objects - arrays, functions, objects

//type of operator

//string
let text = "some text";
console.log(typeof text);

//number
let someNumber = 12;
console.log(typeof someNumber);

//boolean
let someBoolean = true;
console.log(typeof someBoolean);

//null
let someNull = null;
console.log(typeof someNull);

//undefined
let someUndefined;
console.log(typeof someUndefined);
