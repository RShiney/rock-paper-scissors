
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
    console.log(computerChoice);
    const promptStr = prompt();
    const playerChoice = promptStr.toLowerCase();
   
    if (playerChoice === 'rock' && computerChoice ==='scissors')
    return console.log("You win, rock beats scissors");
    else if (playerChoice === 'rock' && computerChoice ==='paper')
    return console.log("You lose, paper beats rock");
    else if (playerChoice === 'rock' && computerChoice === 'rock')
    return console.log("Draw, both picked rock") + round();
    else if (playerChoice === 'paper' && computerChoice === 'rock')
    return console.log('You win, paper beats rock');
    else if (playerChoice === 'paper' && computerChoice=== 'paper')
    return console.log('Draw, both picked paper') + round ();
    else if (playerChoice ==='paper' && computerChoice=== 'scissors')
    return console.log('You lose, scissors beats paper');
    else if (playerChoice === 'scissors' && computerChoice=== 'rock')
    return console.log('You lose, rock  beats scissors');
    else if (playerChoice === 'scissors' && computerChoice=== 'paper')
    return console.log('You win, scissors beats paper');
    else if (playerChoice === 'scissors' && computerChoice === 'scissors')
    return console.log('Draw, both picked scissors') + round();


  

}


//console.log(str)
/*
function reset() {
    let result = str.substring(0,5);
    if (result==='Draw,')
    return round();
    else ''
}
    console.log(reset()) */



/*
function drawReset(){
if (result ==='Draw, bo')
return ;
}
const newComputerChoice = getComputerChoice();
const newPlayerChoice =prompt();
//console.log(newComputerChoice);
//console.log(newPlayerChoice);
function newRound(){
    if (newPlayerChoice === 'rock' && newComputerChoice ==='scissors')
    return console.log("You win, rock beats scissors";
    else if (newPlayerChoice === 'rock' && newComputerChoice ==='paper')
    return console.log("You lose, paper beats rock";
    else if (newPlayerChoice === 'rock' && newComputerChoice === 'rock')
    return "Draw, both picked rock";
    else if (newPlayerChoice === 'paper' && newComputerChoice === 'rock')
    return console.log('You win, paper beats rock';
    else if (newPlayerChoice === 'paper' && newComputerChoice=== 'paper')
    return 'Draw, both picked paper';
    else if (newPlayerChoice ==='paper' && newComputerChoice=== 'scissors')
    return console.log('You lose, scissors beats paper';
    else if (newPlayerChoice === 'scissors' && newComputerChoice=== 'rock')
    return console.log('You lose, rock  beats scissors';
    else if (newPlayerChoice === 'scissors' && newComputerChoice=== 'paper')
    return console.log('You win, scissors beats paper';
    else if (newPlayerChoice === 'scissors' && newComputerChoice === 'scissors')
    return 'Draw, both picked scissors';
}
console.log(newRound())



//player selection 

//computer selection
//case insensetive
//if player picks '' + computer selects '' then print ''
*/