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
    const results = document.querySelector(".results");
    // 1 === win, 2 === loss, 0 === tie
    switch(playerSelection)
    {
        case "rock":
            if (computerSelection === "rock")
            {
                results.textContent = "You both chose Rock... Tie round!"
                return 0
            }
            else if (computerSelection === "paper")
            {
                results.textContent = "Computer chose Paper... You lose!"
                return 2
            }
            else
            {
                results.textContent = "Computer chose Scissors... You win!"
                return 1
            }
        case "paper":
            if (computerSelection === "rock")
            {
                results.textContent = "Computer chose Rock... You win!"
                return 1
            }
            else if (computerSelection === "paper")
            {
                results.textContent = "You both chose Paper... Tie round!"
                return 0
            }
            else
            {
                results.textContent = "Computer chose Scissors... You lose!"
                return 2
            }
        case "scissors":
            if (computerSelection === "rock")
            {
                results.textContent = "Computer chose Rock... You lose!"
                return 2
            }
            else if (computerSelection === "paper")
            {
                results.textContent = "Computer chose Paper... You win!"
                return 1
            }
            else
            {
                results.textContent = "You both chose Scissors... Tie round!"
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