const playerSelection = "rock"

const getComputerChoice = () => {
    const num = Math.ceil(Math.random() * 3)

    return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors"
}

const playRound = (playerSelection, getComputerChoice) => {
    const player = playerSelection.toLowerCase()
    const computer = getComputerChoice.toLowerCase()

    if (player === "rock") {
        if (computer === "rock") {
            return("It's a tie")
        } else if (computer === "paper") {
            return("Computer wins")
        } else if (computer === "scissors") {
            return("You win")
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            return("You win")
        } else if (computer === "paper") {
            return("It's a tie")
        } else if (computer === "scissors") {
            return("Computer wins")
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            return("Computer wins")
        } else if (computer === "paper") {
            return("You win")
        } else if (computer === "scissors") {
            return("It's a tie")
        }
    }
}

const game = (playRound) => {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        if (playRound === "It's a tie") {
            continue;
        } else if (playRound === "You win") {
            score += 1
        } else if (playRound === "Computer wins") {
            score -= 1
        }
    }

    return score > 0 ? console.log("You win the best of 5") : score < 0 ? console.log("You lose the best of 5") : console.log("The best of 5 is a tie")
}

game(playRound(playerSelection, getComputerChoice()))