function getComputerChoice(){
    let optionsArray = ["ROCK","PAPER","SCISSOR"];
    let randomSelection  = Math.floor(Math.random()*optionsArray.length);
    return optionsArray[randomSelection];
    console.log(optionsArray[randomSelection]);
}


function playRound(playerSelection, computerSelection){
    let result;
    if(playerSelection === computerSelection){
        // result  = "Tie !!";
        result = -1;
    }else if(playerSelection === "ROCK"){
        if(computerSelection === "PAPER"){
            // result  = "YOU LOSE ! " + computerSelection + " beats " + playerSelection;
            result = 0;
        }else {
            // result  = "YOU WIN ! " + playerSelection + " beats " + computerSelection ;
            result = 1;
        }

    }else if(playerSelection==="PAPER"){
        if(computerSelection === "SCISSOR"){
            // result  = "YOU LOSE ! " + computerSelection + " beats " + playerSelection;
            result = 0;
        }else {
            // result  = "YOU WIN ! " + playerSelection + " beats " + computerSelection;
            result = 1;
        }
    }else {
        if(computerSelection === "ROCK"){
            // result  = "YOU LOSE ! " + computerSelection + " beats " + playerSelection;
            result = 0;
        }else {
            // result  = "YOU WIN ! " + playerSelection + " beats " + computerSelection;
            result = 1;
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


function displayScores(userScore, compScore){
    const userScoreSpan = document.querySelector("#userScoreInput");
    const compScoreSpan = document.querySelector("#compScoreInput");
    const outputSpan = document.querySelector("#outputFinal");
    if(userScore===5){
        outputSpan.textContent = "NEW PLAYER WINS !!!!";
        userScoreSpan.innerText = userScore;
        compScoreSpan.innerText = compScore; 
    }else if(compScore===5){
        outputSpan.textContent = "COMPUTER WINS !!!!";
        userScoreSpan.innerText = userScore;
        compScoreSpan.innerText = compScore; 
    }else{
        userScoreSpan.innerText = userScore;
        compScoreSpan.innerText = compScore;    
    }
    
}



let userScore = 0;
let compScore = 0;

displayScores(userScore, compScore);

const rockButton = document.querySelector("#button1");
const paperButton = document.querySelector("#button2");
const scissorButton = document.querySelector("#button3");

const outputSpan = document.querySelector("#outputFinal");

rockButton.addEventListener("click", function(){
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(result==1){
        userScore++;
        outputSpan.textContent = "New Player Beat Computer !!";

    }else if(result==0){
        compScore++;
        outputSpan.textContent = "Computer Beat New Player!!";
    }else{
        outputSpan.textContent = "TIE !!";
    }

    displayScores(userScore, compScore);

});

paperButton.addEventListener("click", function(){
    const playerSelection = "PAPER";
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(result==1){
        userScore++;
        outputSpan.textContent = "New Player Beat Computer !!";

    }else if(result==0){
        compScore++;
        outputSpan.textContent = "Computer Beat New Player!!";
    }else{
        outputSpan.textContent = "TIE !!";
    }

    displayScores(userScore, compScore);
});



scissorButton.addEventListener("click", ()=>{
    const playerSelection = "SCISSOR";
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(result==1){
        userScore++;
        outputSpan.textContent = "New Player Beat Computer !!";

    }else if(result==0){
        compScore++;
        outputSpan.textContent = "Computer Beat New Player!!";
    }else{
        outputSpan.textContent = "TIE !!";
    }

    displayScores(userScore, compScore);
});

