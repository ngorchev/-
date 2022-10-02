function rockPaperScissors(izbor){

    let playerTurn = izbor;
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn == "r" || playerTurn == "rock" || playerTurn == "kamak" || playerTurn == "kamuk" || playerTurn == "k"){
        playerTurn = rock;
        console.log(`You choose ${rock}!`)
    } else if (playerTurn == "paper" || playerTurn == "p" || playerTurn == "hartiq" || playerTurn == "h" || playerTurn == "hartia"){
        playerTurn = paper;
        console.log(`You choose ${paper}!`)
    } else if (playerTurn == "s" || playerTurn == "scissors" || playerTurn == "nojica" || playerTurn == "noj" || playerTurn == "n"){
        playerTurn = scissors;
        console.log(`You choose ${scissors}!`)
    } else {
        console.log(`Неграмотен си, опитай пак!`);
    }


    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    switch (computerRandomNumber) {
        case 1:
            computerMove = rock;
            break;
        case 2:
            computerMove = paper;
        case 3:
            computerMove = scissors;
        default:
            break;
    }

    console.log(`The computer chooses ${computerMove}`);

    if(playerTurn === rock && computerMove === scissors || playerTurn === paper && computerMove === rock || playerTurn === scissors && computerMove === paper){
        console.log(`You WIN!`);
    } else if(playerTurn === rock && computerMove === paper || playerTurn === paper && computerMove === scissors || playerTurn === scissors && computerMove === rock){
        console.log(`You lost!`);
    } else if(playerTurn === rock && computerMove === rock || playerTurn === paper && computerMove === paper || playerTurn === scissors && computerMove === scissors){
        console.log(`This game was a draw!`);
    }
}

rockPaperScissors('s')