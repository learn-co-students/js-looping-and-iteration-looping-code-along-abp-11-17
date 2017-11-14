const employee = ['Kaitln', 'Jan', 'Joe', 'Gabe', 'Lisa']


function printBadges(employee) {
  for (let i=0; i < employee.length; i++ ) {
  console.log (`Welcome ${employee[i]}! You are employee #${i+1}.`)
}
return employee;
}
printBadges(employee);



function tailsNeverFails() {
    let tails = 0;
    while (Math.random() >= 0.5) {
      tails++
    };
    return `You got ${tails} tails in a row!`;
}
