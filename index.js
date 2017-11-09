// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let numOfTails = 0;
  while (maybeTrue()) {
    numOfTails++;
  }
  return `You got ${numOfTails} tails in a row!`;
}
