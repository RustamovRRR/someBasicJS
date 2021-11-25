// Math
// Standard build-in objects - always available

let number = 3.45;
// Math.floor
let result = Math.floor(number);
console.log(`Math.floor --- ${result}`);

// Math.ceil
result = Math.ceil(number);
console.log(`Math.ceil --- ${result}`);

// Math.sqrt
number = 81;
result = Math.sqrt(number);
console.log(`Math.sqrt --- ${result}`);

// Math.PI
result = Math.PI;
console.log(`Math.PI --- ${result}`);

// Math.min
result = Math.min(23, 34, 54, 23, 12);
console.log(`Math.min --- ${result}`);

// Math.max
result = Math.max(23, 34, 54, 23, 12);
console.log(`Math.max --- ${result}`);

// Math.random
result = Math.random();
console.log(`Math.random --- ${result}`);

// Math.random with floor
result = Math.floor(Math.random() * 10 + 1);
console.log(`Math.random --- ${result}`);

// Math.round(x) returns the nearest integer
result = Math.round(3.4);
console.log(`Math.round --- ${result}`);

// Math.pow()
result = Math.pow(3, 4);
console.log(`Math.pow --- ${result}`);

// Math.abs()
result = Math.abs(-4);
console.log(`Math.abs --- ${result}`);
