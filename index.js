// Code your solutions in this file
const badges = ['Ada', 'Brendan', 'Ali'];

function printBadges(badges)
{
  for (let i = 0; i < badges.length; i++ )
  {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }

  return badges;
}

function tailsNeverFails()
{
  let count = 0;

  while (Math.random() >= 0.5)
  {
    count++;
  }
  return `You got ${count} tails in a row!`;
}
