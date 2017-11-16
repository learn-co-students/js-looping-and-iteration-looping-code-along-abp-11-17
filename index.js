// Code your solutions in this file
//F1
const names = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(names){
  for(i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
};
//F2
function tailsNeverFails() {
  let tails = 0;
  while(Math.random() >= 0.5){
  tails++;
  }
  return `You got ${tails} tails in a row!`;
};
