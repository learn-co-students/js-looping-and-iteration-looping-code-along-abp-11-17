// Code your solutions in this file
function printBadges(array) {
  for (let x = 0; x<array.length; x++ ) {
    console.log(`Welcome ${array[x]}! You are employee #${x+1}.`)
  }
  return array
}

function tailsNeverFails() {
  let num = 0
  while ( Math.random() >= .5 && num <15) {
    num++
  }
  return `You got ${num} tails in a row!`
}
