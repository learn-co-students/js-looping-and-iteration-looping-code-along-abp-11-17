// Code your solutions in this file
const a = ['Ada', 'Brendan', 'Ali'];
function printBadges(a){
  for(let i = 0; i < a.length; i++){
    console.log(`Welcome ${a[i]}! You are employee #${i+1}.`);
  }
  return a;
}

function tailsNeverFails(){
  let streak = 0;
  while (Math.random() >= 0.5){
    streak++;
  }
  return `You got ${streak} tails in a row!`;
}
