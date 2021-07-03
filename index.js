// Code your solutions in this fi
function printBadges (name){
  for (var i = 0; i < name.length; i++) {
      console.log('Welcome ' + name[i]+ '! You are employee #' + (i+1) + '.');

  }
  return name;
}
printBadges(['Joe', 'Gabe']);

function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let counter = 0;
  while(coinToss()){
    counter++
  }
  return `You got ${counter} tails in a row!`
}
ailsNeverFails();
