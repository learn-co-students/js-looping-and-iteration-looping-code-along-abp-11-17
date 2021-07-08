// Code your solutions in this file

function printBadges(anArray){
  for (let i = 0; i < anArray.length; i++) {
    console.log(`Welcome ${anArray[i]}! You are employee #${i+1}.`)
  }
return anArray;
}
function tailsNeverFails(){
  let counter = 0;
  let coin = Math.random();
  while (coin >= 0.5) {
    coin = Math.random();
    counter++
  }
return `You got ${counter} tails in a row!`
}
