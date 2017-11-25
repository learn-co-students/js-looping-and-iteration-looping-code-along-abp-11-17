function printBadges (arrayNames) {
  for (let i=0; i<arrayNames.length; i++) {
    console.log(`Welcome ${arrayNames[i]}! You are employee #${i+1}.`)
  }
  return arrayNames;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let counter = 0;
  while (maybeTrue()) {
    counter++
  }
  return(`You got ${counter} tails in a row!`);  
}
