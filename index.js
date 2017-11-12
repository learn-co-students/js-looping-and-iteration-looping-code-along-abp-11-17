// Code your solutions in this file
function printBadges(emps){
  for (let i=0; i<emps.length;i++){
    console.log(`Welcome ${emps[i]}! You are employee #${i+1}.`)
  }
  return emps;
}


function tailsNeverFails(){

  let count = 0
  while (Math.random()>=0.5){
    count++

  }

  return `You got ${count} tails in a row!`
}
