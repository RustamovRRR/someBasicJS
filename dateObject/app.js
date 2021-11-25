// Date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();

console.log(months[date.getMonth()]);
console.log(days[date.getDay()]);
console.log(date.getFullYear());

document.body.innerHTML = `${days[date.getDay()]} ${date.getDate()}, ${
  months[date.getMonth()]
} ${date.getFullYear()}`;
