// Code your solutions in this file

function printBadges (emp) {
  for (let i=0;i < emp.length; i++){
    console.log(`Welcome ${emp[i]}! You are employee #${i+1}.`)
  }
  return emp;
}




function tailsNeverFails(){
  let tails = 0 ;
  while ( Math.random() >= .5 ){
  tails++;
  }
return `You got ${tails} tails in a row!`;
}
