// Code your solutions in this file
const employees = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges (employees) {
for (let i = 0; i < employees.length; i++) {
  console.log(`Welcome ${employees[i]}! You are employee #${(i+1)}.`);
  }
  return employees
}


function tailsNeverFails() {
    let n = 0

      while (Math.random() >= 0.5) {
        n ++
      }
      return `You got ${n} tails in a row!`;

      // return Math.random() >= 0.5;

}
