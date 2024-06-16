function getComputerChoice (){
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * (options.length));
    return options[index]
}

function getHumanChoice (){
    let option = prompt("Your Turn for Rock-Paper-Scissors!")
    console.log(option)
    while(option.toLowerCase() !== 'rock' && option.toLowerCase() !== 'paper' && option.toLowerCase() !== 'scissors'){
        console.log("Wrong option, remember: rock/paper/scissors...Try Again!");
        option = prompt("Your Turn for Rock-Paper-Scissors!");
    }
    console.log(option)
    return option;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        //Case sensitive inputs
            humanChoice = humanChoice.toLowerCase();
            computerChoice = computerChoice.toLowerCase();
        //Check for draw first
            if(humanChoice === computerChoice){
                console.log("Draw!")
            }
            //Check for differnce in options
            else if(humanChoice === 'rock'){
                if(computerChoice === 'paper'){
                    console.log("You Lost! Paper beats Rock")
                    computerScore++;
                }
                else if(computerChoice === 'scissors'){
                    console.log("You Win! Rock beats Scissors")
                    humanScore++;
                }
            }
            
            else if(humanChoice === 'paper'){
                if(computerChoice === 'rock'){
                    console.log("You Win! Paper beats Rock")
                    humanScore++;
                }
                else if(computerChoice === 'scissors'){
                    console.log("You Lost! Scissors beats Paper")
                    computerScore++;
                }
            }
            
            else if(humanChoice === 'scissors'){
                if(computerChoice === 'paper'){
                    console.log("You Win! Scissors beats Paper")
                    humanScore++;
                }
                else if(computerChoice === 'rock'){
                    console.log("You Lost! Rock beats Scissors")
                    computerScore++;
                }
            }
        }

        for(i = 0; i<5; i++){
            console.log(`Round ${i+1}!`)
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }

        let finalResult;
        if(humanScore === computerScore){finalResult = "It's a Tie!"}
        else if(humanScore > computerScore){finalResult = "You're the Winner!"}
        else finalResult = "Womp Womp, Computer is the Winner!"

        alert(`Final Score:\nHuman: ${humanScore}\nComputer: ${computerScore}\n${finalResult}`)
}

while(true){
    playGame()
    let response = prompt("Want to play again?")
    if(response.toLowerCase() === 'no')
    break;
}