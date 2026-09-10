function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0)
        return "rock";
    else if (rand===1)
        return "paper";
    else return "scissors";
}

let computerScore = 0;
let humanScore = 0;

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

    finalScore.textContent="";
    if(computerScore===5){
        finalScore.textContent="Computer score is 5  Your score is" + humanScore.toString() + ". YOU LOSE!!!!"; 
        computerScore = 0;
        humanScore=0;
    }
    if(humanScore===5){
        finalScore.textContent="Computer score is " + computerScore.toString() + "  Your score is 5. YOU WIN!!!!"; 
        computerScore = 0;
        humanScore = 0;
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const results = document.createElement("div");
const finalScore = document.createElement("h1");

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
container.appendChild(results);
container.appendChild(finalScore);