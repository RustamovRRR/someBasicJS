// reduce method
// iterates, callback function
// reduce to a single value - number, array, objact
// 1 parametr ('acc') - total of all calculation
// 2 parametr ('curr') - current iteration/value

const people = [
  { name: "Aragorn", age: 22, position: "actor", salary: 200 },
  { name: "Elizabeth", age: 34, position: "martial artist", salary: 300 },
  { name: "Anna", age: 27, position: "director", salary: 400 },
  { name: "Tywin", age: 57, position: "Boss", salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  acc += currItem.salary;
  return acc;
}, 0);

document.body.innerHTML = `<h1>${total}</h1>`;
