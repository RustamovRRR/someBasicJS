// Conditional Statements
// >, <, >=. <=, ==, ===, !=, !==
// else if and !

const num1 = 4;
const num2 = 6;

//using if conditional statement
if (num1 > num2) {
  console.log("first number is great than the second");
}

if (num1 < num2) {
  console.log("second number is great than the first");
}

//using else

if (num1 > num2) {
  console.log("num1 with else");
} else {
  console.log("num2 with else");
}

//using else if
const value1 = 12;
const value2 = 12;
if (value1 > value2) {
  console.log("first is bigger with else if");
} else if (value1 === value2) {
  console.log("equal with else if");
} else {
  console.log("second is bigger with else if");
}

//using negation operator (!)

const someValue = false;
if (!someValue) {
  console.log("we used negation operator");
}

// equality
// == checks only value
// === checks  value and type
console.log("------------equal things -------------");

const equalValue1 = 10;
const equalValue2 = "10";

const twoEquality = equalValue1 == equalValue2;
const threeEquality = equalValue1 === equalValue2;
console.log(twoEquality);
console.log(threeEquality);

console.log("------------ not equal things -------------");

const notTwoEquality = equalValue1 != equalValue2;
const notThreeEquality = equalValue1 !== equalValue2;
console.log(notTwoEquality);
console.log(notThreeEquality);

// Logical Operators
console.log("------------ Logical Operators -------------");
// || - or, && - and, ! - not

// using || operator. If one of the values is true, the conditional statement will work

const personName = "john";
const age = 18;

if (personName === "john" || age === 18) {
  console.log("OR operator works");
} else {
  console.log("OR operator won't work");
}

// using || operator. If statement works when all the values are true.

if (personName === "john" && age === 17) {
  console.log("AND operator works");
} else {
  console.log("AND operator won't work");
}
