import React, { useMemo } from 'react'
import { getScore, saveScore, } from './local-storage-helper'

export default function Scoreboard ({
    wrongCount,
    hasWon,
    hasLost,
}) {
    const score = useMemo(() => {
        const scoreChanged = hasWon || hasLost
        if (scoreChanged) {
            return saveScore(hasWon)
        }
        return getScore()
    }, [hasWon, hasLost])
    return (
        <div
            className="scoreboard"
            >
            <strong className="wins">
                Wins: {score.wins}
            </strong>
            <strong className="losses">
                Losses: {score.losses}
            </strong>
        </div>
    )
}
