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

//splice method - using splice to remove element. It modifies the array
names.splice(1, 1);
console.log(names);
// using splice to remove and add elements
names.splice(1, 2, "barbara", "giovanni", "carla");
console.log(names);

//slice method - slice() method creates a new array. It does not remove any elements from the source array.
const sliceArray = names.slice(1, 3);
console.log(sliceArray);

//using one argument in slice
const oneArgSlice = names.slice(2);
console.log(oneArgSlice);
