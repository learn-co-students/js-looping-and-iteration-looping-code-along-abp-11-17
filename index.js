// Code your solutions in this file
function printBadges (empNames) {
  for (let i = 0; i < empNames.length; i++) {
    console.log(`Welcome ${empNames[i]}! You are employee #${i + 1}.`);
  }
  return empNames;
}

function tailsNeverFails () {
  let tails = 0;
  let heads = 0;

  function mayBeTrue () {
    return Math.random() >= 0.5;
  } // end mayBeTrue

  while (heads === 0) {
    mayBeTrue() ? tails++ : heads ++;
  } // end while
  return `You got ${tails} tails in a row!`;
}
