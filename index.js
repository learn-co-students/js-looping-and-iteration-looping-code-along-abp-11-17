// Code your solutions in this file
const employees = [];

function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${[i+1]}.`);
  }
  return employees;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tailsCounter = 0;
  while (maybeTrue()) {
    tailsCounter++;
  }
  return `You got ${tailsCounter} tails in a row!`;
}
