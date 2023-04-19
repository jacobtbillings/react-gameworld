import React from 'react'
import cn from 'clsx'

export const WRONG_LIMIT = 7
const SUCCESS_IMAGE_COUNT = 12
const FAILURE_IMAGE_COUNT = 17

function getRandomInt(max) {
return Math.floor(Math.random() * max)+1
}

export default function Score ({
    wrongCount,
    hasWon,
    hasLost,
}) {
    let image = `./HangmanPics/hangman-score-${wrongCount}.png`
    if (hasWon) {
        image = `./Success Images/${getRandomInt(SUCCESS_IMAGE_COUNT)}.gif`
    } else if (hasLost) {
        image = `./Failure Images/${getRandomInt(FAILURE_IMAGE_COUNT)}.gif`
    }
    return (
        <img
            src={image}
            alt=''
            className={cn('score',{
                win: hasWon,
                loss: hasLost
            })}
        />
    )
}
