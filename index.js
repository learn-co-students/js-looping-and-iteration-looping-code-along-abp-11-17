function writeCards(name, eventName) {
    let tyCard = []

    for ( let i = 0; i < name.length; i++ ) {
        console.log(i)
        tyCard.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
    return tyCard;
}

function countDown(num) {

    while (num > 0) {
        console.log(num)
        num-=1
    }
    console.log(num)
}