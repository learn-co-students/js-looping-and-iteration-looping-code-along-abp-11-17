// Code your solutions in this file
function printBadges(arrayNames){
  for(let i = 0; i < arrayNames.length; i++){
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`);
  }
  return arrayNames;
}
function tailsNeverFails(){
  let tails=0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}
