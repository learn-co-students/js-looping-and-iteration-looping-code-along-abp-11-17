// Code your solutions in this file
function printBadges(names) {
  for (let i=0;i < names.length;i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}
function tailsNeverFails() {
  let i = -1
  let test_case = 1
  while (test_case >= 0.5) {
    test_case = Math.random()
    i++
  }

const result = "You got " + i + " tails in a row!"
return result
}
