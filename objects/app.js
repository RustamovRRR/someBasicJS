// Objects - key/value pairs methods
//dot notation

const person = {
  firstName: "Tywin",
  lastName: "Lannister",
  age: 60,
  education: true,
  married: false,
  children: ["Cercei", "Jaime", "Tyrion"],
  slogan: function () {
    return "A Lannister always pays his debts!";
  },
};

//using dot notation
const personName = person.firstName;
console.log(personName);

//using bracket notation
console.log(person["education"]);

//modify value
person.age = 70;
console.log(person.age);

//invoke the function in console.log
console.log(person.slogan());
