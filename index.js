function printBadges(worker){
  for (let i = 0; i < worker.length; i++) {
    console.log(`Welcome ${worker[i]}! You are employee #${i+ 1}.`)
  }
  return worker;
}

function tailsNeverFails() {
  let  tails = 0;
  while (Math.random() >= 0.5){
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
