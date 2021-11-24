// switch

const dice = 6;

switch (dice) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  default:
    console.log("something went wrong!");
    break;
}

//using 2 or more condition for same result

const someNumber = 3;

switch (someNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("less or equal to 4");
    break;
  case 5:
  case 6:
    console.log("five or six");
    break;
  default:
    console.log("something went wrong!");
    break;
}
