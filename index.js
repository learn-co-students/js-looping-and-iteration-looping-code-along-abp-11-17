function printBadges(arr){
  for(let i=0; i<arr.length; i++){
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
}
function tailsNeverFails(){
  let coinflip = Math.round(Math.random());
  let numbertails = 0;
  while(coinflip !== 0){
    coinflip = Math.round(Math.random());
    numbertails ++;
    console.log(coinflip);
  }
  return `You got ${numbertails} tails in a row!`;
}
