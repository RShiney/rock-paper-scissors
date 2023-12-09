
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
 
const str = round()
 function round() {
        const computerChoice = getComputerChoice()
   // console.log(computerChoice);
    const promptStr = prompt();
    const playerChoice = promptStr.toLowerCase();
    
   
    if (playerChoice === 'rock' && computerChoice ==='scissors')
    return console.log("You win, rock beats scissors") + (playerPoints ++) + console.log('You, '+playerPoints+' : Computer, '+computerPoints);
    else if (playerChoice === 'rock' && computerChoice ==='paper')
    return console.log("You lose, paper beats rock") + (computerPoints ++) + console.log('You, '+playerPoints+' : Computer, '+computerPoints);
    else if (playerChoice === 'rock' && computerChoice === 'rock')
    return console.log("Draw, both picked rock") + round();
    else if (playerChoice === 'paper' && computerChoice === 'rock')
    return console.log('You win, paper beats rock') + (playerPoints ++) + console.log('You, '+playerPoints+' : Computer, '+computerPoints);
    else if (playerChoice === 'paper' && computerChoice=== 'paper')
    return console.log('Draw, both picked paper') + round ();
    else if (playerChoice ==='paper' && computerChoice=== 'scissors')
    return console.log('You lose, scissors beats paper')+ (computerPoints ++) + console.log('You, '+playerPoints+' : Computer, '+computerPoints);
    else if (playerChoice === 'scissors' && computerChoice=== 'rock')
    return console.log('You lose, rock  beats scissors')+ (computerPoints ++) + console.log('You, '+playerPoints+' : Computer, '+computerPoints);
    else if (playerChoice === 'scissors' && computerChoice=== 'paper')
    return console.log('You win, scissors beats paper') + (playerPoints ++) + console.log('You, '+playerPoints+' : Computer, '+computerPoints);
    else if (playerChoice === 'scissors' && computerChoice === 'scissors')
    return console.log('Draw, both picked scissors') + round();

}

function game(){
    if (playerPoints >= 3)
    return "You beat the computer!!";
    else if (computerPoints >= 3)
    return "You lost to the computer :(";
}

round();
round();
round();
round();
console.log(game());
