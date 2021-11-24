// string properties and methods

let text = " Gandalf the Grey";

//length property
let result = text.length;
console.log(result);
console.log(text.length);

//lowercase and uppercase methods
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//charAt method
console.log(text.charAt(2));
//last char
console.log(text.charAt(text.length - 1));

//indexof method
console.log(text.indexOf("a"));

//trim() method
console.log(text.trim());
console.log(text.trimEnd());
console.log(text.trimStart());

//combine more methods and using startsWith metod
console.log(text.toLowerCase().trim().startsWith("gandalf"));

//endsWith method
console.log(text.endsWith("Grey"));

//includes method
console.log(text.includes("the"));

//slice method. slice(start, end)
console.log(text.slice(1, 3));
// If you omit the second parameter, the method will slice out the rest of the string:
console.log(text.slice(3));

//split() convert string to array
console.log(text.trim().split(" "));
