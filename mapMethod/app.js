// map method
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: "Aragorn", age: 22, position: "actor" },
  { name: "Elizabeth", age: 34, position: "martial artist" },
  { name: "Anna", age: 27, position: "director" },
  { name: "Tywin", age: 57, position: "Boss" },
];

const ages = people.map(function (item) {
  return item.age + 10;
});
console.log(ages);

const newArray = people.map(function (item) {
  return { fullName: `${item.name} NorthFire`, personAge: item.age };
});

console.log(newArray);

const domAray = people.map(function (item) {
  return `<h1>${item.name.toUpperCase()}</h1>`;
});

document.body.innerHTML = domAray.join("");
