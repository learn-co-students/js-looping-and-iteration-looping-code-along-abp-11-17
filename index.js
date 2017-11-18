// Code your solutions in this file
// const employees = ['Ada', 'Brendan', 'Ali'];
function printBadges (element) {
  let empNo = 1;
  for (let i = 0; i < element.length; i++) {
     console.log(`Welcome ${element[i]}! You are employee #${empNo}.`);
     empNo ++;
  }
  return element;
}

 function tailsNeverFails() {
   let i = 0;
   while (Math.random() >= 0.5) {
     i++;
   }
   return (`You got ${i} tails in a row!`);
 }
