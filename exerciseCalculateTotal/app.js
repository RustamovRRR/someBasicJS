// functions, return, if, arrays, for loop

const salyarka = [100, 200, 20, 50];
const food = [15, 23, 12, 15];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 200) {
    console.log(`Who-Ah, you spent to much!!!`);
    return total;
  }
  console.log(`Your spending is good.`);
  return total;
}

const salyarkaTotal = calculateTotal(salyarka);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([1, 2, 3]);

console.log({
  salyarka: salyarkaTotal,
  food: foodTotal,
  random: randomTotal,
});
