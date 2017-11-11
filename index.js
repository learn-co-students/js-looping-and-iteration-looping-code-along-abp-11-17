// Code your solutions in this file

//employees = ["Ada", "Brendan", "Ali"]

function printBadges(employees) {
  for(let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

//printBadges(employees);

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  tails = 0;
  while(maybeTrue()) {
    tails++;
  }
  return `You got ${tails} tails in a row!`
}
