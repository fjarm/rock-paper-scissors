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
    playerSelection = playerSelection.toLowerCase()

    switch(playerSelection)
    {
        case "rock":
            if (computerSelection === "rock")
            {
                return "Tie!"
            }
            else if (computerSelection === "paper")
            {
                return "You Lose! Paper beats Rock."
            }
            else
            {
                return "You Win! Rock beats Scissors."
            }
        case "paper":
            if (computerSelection === "rock")
            {
                return "You Win! Paper beats Rock."
            }
            else if (computerSelection === "paper")
            {
                return "Tie!"
            }
            else
            {
                return "You Lose! Scissors beats Paper."
            }
        case "scissors":
            if (computerSelection === "rock")
            {
                return "You Lose! Rock beats Scissors."
            }
            else if (computerSelection === "paper")
            {
                return "You Win! Scissors beats Paper."
            }
            else
            {
                return "Tie!"
            }
        default:
            return "Sorry, something went wrong."
    }
}

const playerSelection = "rOck"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))