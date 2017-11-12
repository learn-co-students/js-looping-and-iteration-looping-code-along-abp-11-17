// Code your solutions in this file
const employeeNames = ['Ada', 'Brendan', 'Ali'];

function printBadges (employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`);
  }

  return employeeNames;
}

//while loop

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
