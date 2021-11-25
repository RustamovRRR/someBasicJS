// find method
// returns single instacne - (in this example object)
// returns first match, if no match undefined
// great for getting unique values

const people = [
  { name: "Aragorn", age: 22, position: "actor", id: 1 },
  { name: "Elizabeth", age: 34, position: "martial artist", id: 2 },
  { name: "Anna", age: 27, position: "director", id: 3 },
  { name: "Tywin", age: 57, position: "Boss", id: 4 },
];

const newPerson = people.find(function (item) {
  return item.id === 2;
});
console.log(newPerson);

//differect between find and filter
//find returns sinfle instance but filter returns a new filtered array
console.log(
  people.filter(function (item) {
    return item.id > 2;
  })
);

const textNameArray = ["john", "robert", "maggie", "alex"];
console.log(
  textNameArray.find(function (item) {
    return item === "maggie";
  })
);
