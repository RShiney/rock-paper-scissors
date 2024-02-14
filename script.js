
    var playerPoints = 0;
    var computerPoints = 0;
   
function getComputerChoice(){
    const random = (max, min) => 
    Math.floor(Math.random() * (3)) + 1;
   if (random() === 1) {
    return 'rock'
   }
   else if (random() === 2) {
    return 'paper'
   } 
   else  {
     return 'scissors'
   }
}





 

function game(){
    if (playerPoints >= 3)
    return "You beat the computer!!";
    else if (computerPoints >= 3)
    return "You lost to the computer :(";
}



/*round();
round();
round();
round();*/
 console.log(game());
