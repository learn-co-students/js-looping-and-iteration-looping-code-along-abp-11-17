function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let numberFlips = 0;
  let maybeTrue = true;
  while (maybeTrue) {
    maybeTrue = Math.random() >= 0.5;
    numberFlips++;
  }
  return `You got ${numberFlips - 1} tails in a row!`;
}
