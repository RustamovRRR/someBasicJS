// using arrays and for loop
//adding last names to the firstnames using for loop

//declaring variables
const firstNames = ["Cersei", "Jaime", "Tyrion"];
const lastName = "Lannister";
const fullNames = [];

//using for loop
for (let i = 0; i < firstNames.length; i++) {
  //using template literals
  fullNames.push(`${firstNames[i]} ${lastName}`);
}

console.log(fullNames);
