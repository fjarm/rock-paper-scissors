function getRandomInt(max) // Get a random number between 1 and 3
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    let computerChoice = getRandomInt(3)
    if (computerChoice === 0)
    {
        return "rock"
    }
    else if (computerChoice === 1)
    {
        return "paper"
    }
    else
    {
        return "scissors"
    }

}

function getPlayerChoice()
{
    let isPlayerChoiceValid = 0
    while (isPlayerChoiceValid === 0)
    {
        let playerChoice = window.prompt("What do you pick? Rock, Paper, or Scissors?")
        playerChoice = playerChoice.toLowerCase()
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")
        {
            isPlayerChoiceValid = 1
            return playerChoice
        }
        else
        {
            alert("Sorry, that's not a valid choice.")
        }
    }
}

function playRound(playerSelection, computerSelection)
{
    // 1 === win, 2 === loss, 0 === tie
    switch(playerSelection)
    {
        case "rock":
            if (computerSelection === "rock")
            {
                console.log("tie")
                return 0
            }
            else if (computerSelection === "paper")
            {
                console.log("lose")
                return 2
            }
            else
            {
                console.log("win")
                return 1
            }
        case "paper":
            if (computerSelection === "rock")
            {
                console.log("win")
                return 1
            }
            else if (computerSelection === "paper")
            {
                console.log("tie")
                return 0
            }
            else
            {
                console.log("lose")
                return 2
            }
        case "scissors":
            if (computerSelection === "rock")
            {
                console.log("lose")
                return 2
            }
            else if (computerSelection === "paper")
            {
                console.log("win")
                return 1
            }
            else
            {
                console.log("tie")
                return 0
            }
        default:
            return "Sorry, something went wrong."
    }
}

function game()
{
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++)
    {
        let player = getPlayerChoice()
        let computer = getComputerChoice()
        let roundResult = playRound(player, computer)
        if (roundResult === 0)
        {
            roundResult = "Tie!"
        }
        else if (roundResult === 1)
        {
            roundResult = "You Win!"
            playerScore = ++playerScore
        }
        else if (roundResult === 2)
        {
            roundResult = "Sorry, you lost."
            computerScore = ++computerScore
        }

        console.log(`Round ${i + 1} result: ${roundResult}`)
        console.log(`Current score: ${playerScore} - ${computerScore}`)
    }
    if (playerScore === computerScore)
    {
        console.log(`Game over! It's a tie game with a final score of ${playerScore} - ${computerScore}!`)
    }
    else if (playerScore > computerScore)
    {
        console.log(`Game over! You win with a final score of ${playerScore} - ${computerScore}!`)
    }
    else
    {
        console.log(`Game over! You lose with a final score of ${playerScore} - ${computerScore}!`)
    }
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});