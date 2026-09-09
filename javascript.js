function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0)
        return "rock";
    else if (rand===1)
        return "paper";
    else return "scissors";
}

/*
function getHumanChoice(){
    return (prompt("Enter one of the choices(rock,paper, scissors)")).toLowerCase();

}
*/

let computerScore = 0;
let humanScore = 0;

const results = document.createElement("div");
document.body.appendChild(results);

function playRound(event){
    let humanChoice = (event.target.textContent);
    computerChoice=getComputerChoice()
    if(humanChoice === computerChoice)
        results.textContent = "Draw! Both chose " + computerChoice;
    else if ((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="scissors" && computerChoice==="paper") || (humanChoice==="paper" && computerChoice==="rock")){
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else{
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
}
/*
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
*/

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

const container = document.querySelector(".container");
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
