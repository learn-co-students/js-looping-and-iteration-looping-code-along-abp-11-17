//
const names =["Bob","Jim","Sal"];
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tails = 0;
  while (maybeTrue()) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
