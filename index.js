// Code your solutions in this file
function printBadges(employeeNames) {
  employeeNames.map((employeeName,index,employeeNames)=>{
    console.log(`Welcome ${employeeNames[index]}! You are employee #${index+1}.`);

  } )
  return employeeNames;
}
function tailsNeverFails(){

  let count=0;
  while (Math.random() >= 0.5) {
    count=count +1;
    }


    return (`You got ${count} tails in a row!`);
}
