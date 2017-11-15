// Code your solutions in this file
function printBadges(array1){
  for (let i =0; i < array1.length; i++){
    console.log(`Welcome ${array1[i]}! You are employee #${i+1}.`);
  }
  return array1;
}
function maybeTrue(){
  return Math.random()>=0.5;
}
function tailsNeverFails(){
  let isHead = true;
  let countTail = 0;
  while(isHead){

    if(maybeTrue()){
      countTail++ ;
    }
    else{
      isHead = false;
    }
  }
  console.log(countTail);
  return `You got ${countTail} tails in a row!`;
}
