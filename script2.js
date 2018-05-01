"use strict";
 //Alia Javascript Game

function startGame(){
    

let greeting = prompt ("Would you like to play a game with two players?");


if (greeting === "yes") {
   let userHealth = 30;
   let grantHealth = 10;
   let userName = prompt ("What's your name?");
   let wins = 0;  
    

function startCombat(){
       
    while (grantHealth > 0) {
        let question = prompt ("Would you like to attack or quit?").toLowerCase();
        if (question === "attack"){
        
    function getDamage(){ 
    return Math.floor(Math.random() * 5+1);
        
}
           console.log (`${userName} health: ${userHealth}`);
           console.log (`Grant's Health: ${grantHealth}`);
           console.log (`Your health is now ${(userHealth -= getDamage())}`);
           console.log (`Grant's health is now ${(grantHealth -= getDamage())}`);
            


           if (grantHealth <=0) {
                   wins++;
                   console.log (`${userName} wins: ${wins}`);
                   grantHealth = 10;
               }

            if (wins >= 3) {
               console.log (`Congratulations ${userName}`);
              break;
           } else if (userHealth <=0) {
               console.log ("Game over");
               break;
       }
        
            } else {
            break;
            }
            
              
    }                                    
} 
    startCombat();


} else if (greeting === "no") {
            console.log ("Byeeeee!");
        }
}
startGame();
