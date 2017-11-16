// Code your solutions in this file
const arr = ["Joe", "Gabe", 'Lisa', 'Kaitlin', 'Jan'];

function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

function tailsNeverFails(){
  let coin = 0;
  while (Math.random() >= 0.5) {
    coin = coin + 1;
  }
  return `You got ${coin} tails in a row!`;
}
