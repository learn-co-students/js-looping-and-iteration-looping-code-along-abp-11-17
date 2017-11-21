// Code your solutions in this file
function printBadges(employeeNames) {
  for (let e = 0; e < employeeNames.length; e++) {
    console.log(`Welcome ${employeeNames[e]}! You are employee #${e + 1}.`);
  }
  return employeeNames;
}

function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5){
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
