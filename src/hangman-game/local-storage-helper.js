const NAME = 'Hangman: The Office'

const newScore = {
    wins:0,
    losses:0,
}
export const getScore = () => {
    return JSON.parse(localStorage.getItem(NAME)) || newScore
}

const updateScore = (won) => {
    const score = {...getScore()}

    if (won) {
        score.wins++
    } else {
        score.losses++
    }
    return score
}

export const saveScore = (won) => {
    const score = updateScore(won)
    localStorage.setItem(NAME, JSON.stringify(score))
    return score
}
