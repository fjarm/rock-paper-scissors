function getRandomInt(max) // Get a random number between 1 and 3
{
    return Math.floor(Math.random() * max);
}

function getComputerChoice()
{
    let computerChoice = getRandomInt(3)
    if (computerChoice === 0)
    {
        return "Rock"
    }
    else if (computerChoice === 1)
    {
        return "Paper"
    }
    else
    {
        return "Scissors"
    }

}

console.log(getComputerChoice())