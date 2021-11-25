// forEach
// does not return any array

const people = [
  { name: "Aragorn", age: 22, position: "actor" },
  { name: "Elizabeth", age: 34, position: "martial artist" },
  { name: "Anna", age: 27, position: "director" },
];

//callback function from outside
function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

//callback function in inside
people.forEach(function (item) {
  console.log(item.name.toUpperCase());
});
