/* randomizer */

function computerPlay () {
    /* get random number from 1 to 3 */
    const randomIndex = Math.floor(Math.random()*3);
    /* assign random number and get the correspoding index */
    const item = array[randomIndex];
    /* print the index*/
    return item;
}

const array = ['rock', 'paper', 'scissors'];
const computerSelection = computerPlay(array);

/* asks for input*/
const playerSelectionInput = prompt('Rock, paper or scissors?',''); 

/* upper case, lower case working */
let playerSelection = playerSelectionInput.toLowerCase();

/* Plays single round */
function playRound (playerSelection, computerSelection) {


    if (playerSelection === computerSelection ) 
        {
            return ('It`s a tie. Try again!'); 
    
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) 
    
        {
            return ('You won! You are awesome at this!');  
        
    
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper' ) ||
        (playerSelection ==='paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) 
        
        {
            return ('Too bad you lose!') ;
    
    } else {
        return ('Oops something went wrong'); 
    }
}

 
/* 5 rounds */

  
  
console.log('You pick ' + playerSelection);
console.log('I pick ' + computerSelection);

/* return the function!! */
console.log(playRound(playerSelection, computerSelection));
