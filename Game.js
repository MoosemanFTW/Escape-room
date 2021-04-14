var readlineSync = require('readline-sync');
var playerName = readlineSync.question("Please enter player name: ");
var startupmessage = `Welcome ${playerName} to the Escape Room Simulation`;
console.log(startupmessage);

var life = true;
var hasKey = false;

while(life == true && hasKey == false){
    let menuID = readlineSync.keyIn("Press 1 to Put hand in hole \n Press 2 to Search the room \n Press 3 to Open the door \n", {limit: `$<1-3>`});
    if(menuID == 1){
        console.log('You feel a sharp pain in your hand, you have been biten by a venomous snake. You are DEAD. GAME OVER');
        life = false;
    }
    else if(menuID == 2){
        console.log('You search the room and find a key! You think it goes to the door.');
        hasKey = true;
    }
    else if(menuID == 3){
        console.log('You pull on the door but it will not budge. Seems it is locked better find a key.');
    }
};

while(life == true && hasKey == true){
let menuID = readlineSync.keyIn('Press 1 to put your hand in the hole \n Press 2 to try the key in the door lock \n', {limit: '$<1-2>'});
    if(menuID == 1){
        console.log('You feel a sharp pain in your hand, you have been biten by a venomous snake. You are DEAD. GAME OVER');
        life = false;
    }
    else if(menuID == 2){
        console.log(`You turn the key in the door lock and hear a rewarding click! You open the door and escape the room! Congradulations ${playerName} you WIN`);
        life = false;
    }

};