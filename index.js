// // Code your solutions in this file
const employees = ['Lisa', 'Kaitlin', 'Jan'];
function printBadges(employees) {
  for (let i=0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
    }
    return employees;
}


function tailsNeverFails() {
  let n=0;
  while (Math.random() >= 0.5) {
    n++;
  }
  return "You got " + n + " tails in a row!";
}


// function tailsNeverFails() {
//   let coinFlip;
//   while (let n=0; coinFlip <= 0.5; n++) {
//     coinFlip = Math.random();
//     return coinFlip;
//   }
// }


//
//
// function tailsNeverFails() {
// let n=0;
//   while (tailsNeverFails()) {
//     return Math.random() >= 0.5;
//       n++;
//     }
//   // console.log(`You got ${n} tails in a row!`);
//   }



// let n=0;
// function tailsNeverFails() {
//   return Math.random() >= 0.5;
//     while (Math === 'true') {
//       n++;
//     }
//   console.log(`You got ${n} tails in a row!`);
//   }



// let n=0;
// function tailsNeverFails() {
//   return Math.random() >= 0.5;
//     while (tailsNeverFails()) {
//       n++;
//       return n;
//     }
//   console.log(`You got ${n} tails in a row!`);
//   }



// console.log(`You got ${n++} tails in a row!`);
//
//
//
// //       i++;
// //     }
// // }
// //   console.log(`You got ${i} tails in a row!`);
