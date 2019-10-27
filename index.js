// Code your solutions in this file

/*const employee = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges (employee) {
  for (let i = 0; i < employee.length; i++) {
    console.log(`Welcome ${employee[i]}! You are employee #[i]` )
  }
}
*/
function printBadges(employee) {
  for (let i = 0; i < employee.length ; i++) {
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
  }
  return employee;
}

printBadges();


/*function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5) {
    counter++;
}
  return `You got ${counter++} tail flips in a row!`;
}
*/
function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5){
    counter++;
  }
  return `You got ${counter++} tails in a row!`;
}
