const name = ['Ada', 'Brendan', 'Ali']

function printBadges(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Welcome ${name[i]}! You are employee #${[i+1]}.`)
  }
  return name
}

function coinFlip() {
  return Math.random() >= 0.5
}

function tailsNeverFails() {
  let attempts = 0
  while (coinFlip()) {
    attempts++
  }
  return `You got ${attempts} tails in a row!`
}
