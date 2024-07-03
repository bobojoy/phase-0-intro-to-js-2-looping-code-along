// Code your solutions in this file
const names=['Guadalupe','Ollie','Aki'];
const event ="surprise";

function writeCards( names, events ) {
    let personalCards =[]
    for ( let i = 0; i < names.length; i++ ){
        personalCards.push( 'Thank you, ${names[i]}, for the wonderful ${events} gift!')
    }
    return personalCards;
}

function  countDown() {
   let numCountdown=11;
   while (numCountdown--) {
    console.log(numCountdown);
   }
}



    