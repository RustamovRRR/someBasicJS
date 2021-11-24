// Array methods and properties
const names = ["john", "victor", "ben", "anastasia", "anna", "yoshido"];

//length property
console.log(names.length);

//element in the last index with length proprety
console.log(names[names.length - 1]);

//pop and push methods
names.push("Alex");
console.log(names);
names.pop();
console.log(names);

//shift and unshift
names.unshift("robert");
console.log(names);
names.shift();
console.log(names);

// concat method
const newArray = ["Ben", "Tywin", "John", "Eddard"];
const concatArrays = names.concat(newArray);
console.log(concatArrays);
