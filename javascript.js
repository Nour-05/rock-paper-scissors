function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0)
        return "rock";
    else if (rand===1)
        return "paper";
    else return "scissors";
}

function getHumanChoice(){
    return (prompt("Enter one of the choices(rock,paper, scissors)")).toLowerCase();

}


let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice)
        console.log("Draw! Both chose " + computerChoice);
    else if ((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="scissors" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="rock")){
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else{
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

function playGame(){
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    let winner = humanScore > computerScore ? "you" : "me";
    console.log("Final winner is " + winner + " !!!!")
}

playGame();