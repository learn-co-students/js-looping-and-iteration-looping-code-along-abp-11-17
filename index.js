function printBadges(list) {
  for (let i=0; i < list.length; i++) {
    console.log(`Welcome ${list[i]}! You are employee #${i+1}.`)
  }
  return list
}

function coinToss() {
  return Math.random() >= 0.5;
}
function tailsNeverFails() {
  var tailCount = 0
  while (coinToss()) {
  tailCount++
  }
  return `You got ${tailCount} tails in a row!`
}
