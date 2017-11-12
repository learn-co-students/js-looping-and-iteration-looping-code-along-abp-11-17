const names = ['teddy bear', 'drone', 'doll'];

function printBadges (items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`Welcome ${items[i]}! You are employee #${i+1}.`);
  }

  return items;
}

function tailsNeverFails()
{
 let counter = 0;
  while (Math.random() >= 0.5)
  {
    counter++;
  }
  return `You got ${counter} tails in a row!`
}
