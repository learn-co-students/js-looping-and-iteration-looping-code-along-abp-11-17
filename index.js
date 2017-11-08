const gifts=["teddy bear","drone","doll"];

function wrapGifts(gifts) {
  for(let i=0;i<gifts.length;i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

function printBadges(employee) {
  for(let i=0;i<employee.length;i++) {
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
  }
  return employee;
}

function tailsNeverFails() {
  let counter=0;
  while(Math.round(Math.random())){
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
