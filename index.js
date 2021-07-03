// Code your solutions in this file
function printBadges(arr){
  for (let idx = 0; idx < arr.length; idx++) {
    console.log(`Welcome ${arr[idx]}! You are employee #${idx + 1}.`);
    // 'Welcome ${ arr[idx]}! You are employee #${idx + 1 }.'

  }
  return arr
}

function coinflip(){
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let counter = 0;
  while (coinflip()){
    counter += 1;
  }
  return `You got ${counter} tails in a row!`
}
