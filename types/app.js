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
