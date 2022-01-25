let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

main();
fetchData();

function main(){
    rock_div.addEventListener('click', function() {
        game('r')
    })
    
    paper_div.addEventListener('click', function() {
        game('p')
    })
    
    scissors_div.addEventListener('click', function() {
        game('s')
    })
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log("USER WINS");
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log("USER LOSES");
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log('ITS DRAW')
            draw();
            break;
    }
}

function getComputerChoice() {
    const choices=['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[Math.floor(Math.random() * 3)];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!!";
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('green-glow')
    }, 1000);
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lose!!";
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('red-glow')
    }, 1000);
}

function draw(){
    result_p.innerHTML = "Its a drawww!!";
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

async function fetchData(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })

    // let response = await fetch('https://api.chucknorris.io/jokes/random');
    // let data = await response.json()
    // console.log(data);

}