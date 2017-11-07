// Code your solutions in this file
function printBadges(name) {
  for(var i =0; i < name.length; i++) {
    console.log(`Welcome ${name[i]}! You are employee #${i+1}.`);

  }
  return name;
}

function tailsNeverFails() {
  let tails = 0;
  let coinFlip = Math.random();
  while (coinFlip >= 0.5) {
    coinFlip = Math.random();
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
