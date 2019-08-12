const names = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(names){
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
}
 return names;
}


function tailsNeverFails(){
  let number = 0;
    while (Math.random() >= 0.5){
      number++;
    }
    return `You got ${number} tails in a row!`;
    console.log("This is working...")
}
