// Code your solutions in this file
function printBadges(arr){
  for (let i=0; i<arr.length; i=i+1){
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
}
function tailsNeverFails(){
  let count=0;
  let flip=0;
  let streak=true;

  while (streak==true){
    flip=Math.random(0,1);
    flip>=0.5 ? flip='tails' : flip='heads';
    switch (flip){
      case 'heads':
        return `You got ${count} tails in a row!`;
      case 'tails':
        count++;
    };
  }
}
