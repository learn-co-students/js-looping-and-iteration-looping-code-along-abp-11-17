function printBadges(array){
  let n = array.length;
  for (i = 0 ; i < n ; i ++){
    console.log (`Welcome ${array[i]}! You are employee #${(i + 1)}.`);
  }
  return array;
}

function tailsNeverFails(){
  var tailsInARow = 0;
  while (Math.random() >= 0.5) {
    tailsInARow = tailsInARow + 1;
  }
  return `You got ${tailsInARow} tails in a row!`;
}
tailsNeverFails();
