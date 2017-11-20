// Code your solutions in this file
function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i + 1}.`);
  }
  return employeeNames;
}

function tailsNeverFails() {
  let count = 0;

  while (Math.random() >= 0.5) {
    count++;
  }
  return `You got ${count} tails in a row!`
}
