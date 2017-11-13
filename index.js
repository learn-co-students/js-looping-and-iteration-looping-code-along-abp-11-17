// Code your solutions in this file

function printBadges(array){
  let newArray = [...array];
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function tailsNeverFails(){
  let number = Math.random();
  let counter = 0;
  while(number >= 0.5){
    console.log('Tails')
    number = Math.random();
    counter++;
  }
  return `You got ${counter} tails in a row!`
}
