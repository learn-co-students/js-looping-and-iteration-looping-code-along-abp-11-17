// Code your solutions in this fi
function printBadges (name){
  for (var i = 0; i < name.length; i++) {
      console.log('Welcome ' + name[i]+ '! You are employee #' + (i+1) + '.');

  }
  return name;
}
printBadges(['Joe', 'Gabe']);

function tailsNeverFails() {
  return Math.random() <= 1;
}

while (tailsNeverFails()) {
    console.log('You got 8 tails in a row!');
}
