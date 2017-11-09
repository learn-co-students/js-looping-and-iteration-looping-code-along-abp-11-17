// Code your solutions in this file
function printBadges(ary) {
  for (let i = 0, len = ary.length; i < len; i++) {
    console.log(`Welcome ${ary[i]}! You are employee #${i+1}.`);
  }

  return ary;
}

function tailsNeverFails() {
  let cnt = 0;
  let tails = true;

  while (tails) {
    let side = Math.random() >= 0.5;
    console.log(side);
    if (side) {
      cnt++;
    }
    else {
      tails = false;
    }
  }

  return `You got ${cnt} tails in a row!`;
}
