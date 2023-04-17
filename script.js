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

function game()
{
    for (let i = 0; i < 5; i++)
    {
        let player = getPlayerChoice()
        let computer = getComputerChoice()
        console.log(playRound(player, computer))
    }
}

game()