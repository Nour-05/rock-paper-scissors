console.log("Hello World");

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0)
        return "rock";
    else if (rand===1)
        return "paper";
    else return "scissors";
}

console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Enter one of the choices(rock,paper, scissors)");

}

console.log(getHumanChoice());