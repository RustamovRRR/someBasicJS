//Loops
//repeatedly run a block of code while a condition is true
//while loop

let amount = 0;

//dont make an endless loop!
while (amount < 5) {
  console.log(`I have ${amount} dollars`);
  amount++;
}

//do while loops
//code block first condition second
//runs at least
console.log("-------------- do While --------------------");

let money = 0;

do {
  console.log(`I have ${money} dollars`);
  money--;
} while (money > 0);
