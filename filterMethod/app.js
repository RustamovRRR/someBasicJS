// map method
// does return a new array
// can manipulate the size of new array
// returns bases on condition

const people = [
  { name: "Aragorn", age: 22, position: "actor" },
  { name: "Elizabeth", age: 34, position: "martial artist" },
  { name: "Anna", age: 27, position: "director" },
  { name: "Tywin", age: 57, position: "Boss" },
];

const oldPeople = people.filter(function (item) {
  return item.age > 30;
});

console.log(oldPeople);

const bosses = people.filter(function (item) {
  return item.position === "Boss";
});
console.log(bosses);
