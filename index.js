// Code your solutions in this file
function printBadges(name) {
  for (let index = 0; index < name.length; index++) {
    console.log(`Welcome ${name[index]}! You are employee #${index + 1}.`);
  }
  return name;
}

const tailsNeverFails = () => {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
};
