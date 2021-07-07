
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
  for (let x = 0; x < names.length; x++){
    console.log(`Welcome ${names[x]}! You are employee #${x+1}.`)
  }
  return names;
}
printBadges(names);


function coinToss(){
 return Math.random() >= 0.5;
}
function tailsNeverFails(){
  let counter = 0;
  while (coinToss()){
    counter++;
  }
  return `You got ${counter} tails in a row!`;
  }
tailsNeverFails();
