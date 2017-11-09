// Code your solutions in this file
const names = ['Joe', 'Gabe', 'Lisa', 'Kaitlin', 'Jan'];

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}
printBadges(names);

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails () {
  let tails = 0;
  while (maybeTrue()) {
   tails++;
  }
  return (`You got ${tails} tails in a row!`);
}
