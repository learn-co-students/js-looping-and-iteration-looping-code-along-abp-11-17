// Code your solutions in this file
//F1
const names = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(names){
  let i = 0;
  for(i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  };
  return names;
};

//F2
function tailsNeverFails(){
  let i = 0
  while (Math.random() >= 0.5){
    i++;
  };
  return `You got ${i} tails in a row!`;
};
