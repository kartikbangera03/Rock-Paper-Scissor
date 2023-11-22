function getComputerChoice(){
    let optionsArray = ["ROCK","PAPER","SCISSOR"];
    let randomSelection  = Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomSelection];
    console.log(optionsArray[randomSelection]);
}

function playRound(playerSelection, computerSelection){

    let result = "";

    if(playerSelection === computerSelection){
        result  = "Tie !!";
    }else if(playerSelection === "ROCK"){
        if(computerSelection === "PAPER"){
            result  = "YOU LOSE ! " + computerSelection + " beats " + playerSelection;
        }else {
            result  = "YOU WIN ! " + playerSelection + " beats " + computerSelection ;
        }

    }else if(playerSelection==="PAPER"){
        if(computerSelection === "SCISSOR"){
            result  = "YOU LOSE ! " + computerSelection + " beats " + playerSelection;
        }else {
            result  = "YOU WIN ! " + playerSelection + " beats " + computerSelection;
        }
    }else {
        if(computerSelection === "ROCK"){
            result  = "YOU LOSE ! " + computerSelection + " beats " + playerSelection;
        }else {
            result  = "YOU WIN ! " + playerSelection + " beats " + computerSelection;
        }
    }
    return result;

}


function getPlayerSelection(){
    let optionsArray = ["ROCK","PAPER","SCISSOR"];
    let keepGoing  = true ; 
    let playerPrompt ;
    while(keepGoing){
        playerPrompt = prompt(" Player Selection : ", " ").toUpperCase();
        if(optionsArray.includes(playerPrompt)){
            keepGoing = false ;
        }
    }    
    return playerPrompt ;
}

function game(){
    let rounds = 5;
    for(let i = 1; i<=5 ; i++){
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        // console.log(playerSelection);
        // console.log(computerSelection);
        console.log(console.log(playRound(playerSelection.toUpperCase(), computerSelection)));
    }
}
game();