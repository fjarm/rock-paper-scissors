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
                updateScore(0)
                break
            }
            else if (computerSelection === "paper")
            {
                results.textContent = "Computer chose Paper... You lose!"
                updateScore(2)
                break
            }
            else
            {
                results.textContent = "Computer chose Scissors... You win!"
                updateScore(1)
                break
            }
        case "paper":
            if (computerSelection === "rock")
            {
                results.textContent = "Computer chose Rock... You win!"
                updateScore(1)
                break
            }
            else if (computerSelection === "paper")
            {
                results.textContent = "You both chose Paper... Tie round!"
                updateScore(0)
                break
            }
            else
            {
                results.textContent = "Computer chose Scissors... You lose!"
                updateScore(2)
                break
            }
        case "scissors":
            if (computerSelection === "rock")
            {
                results.textContent = "Computer chose Rock... You lose!"
                updateScore(2)
                break
            }
            else if (computerSelection === "paper")
            {
                results.textContent = "Computer chose Paper... You win!"
                updateScore(1)
                break
            }
            else
            {
                results.textContent = "You both chose Scissors... Tie round!"
                updateScore(0)
                break
            }
        default:
            return "Sorry, something went wrong."
    }
}

function updateScore(roundResult)
{
    const playerScore = document.querySelector(".playerScore")
    const computerScore = document.querySelector(".computerScore")
    if (roundResult === 1)
    {
        playerScore.textContent = parseInt(playerScore.textContent) + 1
    }
    else if (roundResult === 2)
    {
        computerScore.textContent = parseInt(computerScore.textContent) + 1
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