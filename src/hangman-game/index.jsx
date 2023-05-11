import {includes} from 'lodash'
import React, { useRef, useState, useMemo, useCallback} from 'react'
import Title from './Title'
import Score, {WRONG_LIMIT} from './Score'
import Answer from './Answer'
import Scoreboard from './Scoreboard'
import Episode from './Episode'
import {isComplete} from './complete'
import {getRandomAnswer} from './answers'
import './index.css'

export default function HangmanGame () {
    const [wrongCount, setWrongCount] = useState(0)
    const inputRef = useRef()
    const [answer, setAnswer] = useState(getRandomAnswer())
    const [wrongKeys, setWrongKeys] = useState([])
    const [correctKeys, setCorrectKeys] = useState([])
    const hasWon = useMemo(() => {
        return isComplete(answer, correctKeys)
    }, [answer, correctKeys])
    const hasLost = WRONG_LIMIT === wrongCount
    const onNewGame = useCallback(() => {
        setAnswer(getRandomAnswer())
        setWrongCount(0)
        setWrongKeys([])
        setCorrectKeys([])
        setTimeout(() => {
            inputRef.current.focus()
        }, 5)
    }, [])
    return (
        <div className='hangman-game'>
            <Title />
            <div className='side-by-side'>
                <div className='gif'>
                    <Score wrongCount={wrongCount}
                        hasWon={hasWon}
                        hasLost={hasLost}
                    />
                </div>
                <div>
                    <Episode
                        answer={answer}
                        hasWon={hasWon}
                        hasLost={hasLost}
                        />
                    <Answer
                        answer={answer}
                        correctKeys={correctKeys}
                        hasWon={hasWon}
                        hasLost={hasLost}
                        inputRef={inputRef}
                        onNewGame={onNewGame}
                        onIncorrect={key => {
                            const isNewWrongKey = !includes(wrongKeys, key)
                            if (isNewWrongKey) {
                                setWrongCount(wrongCount+1)
                                setWrongKeys([...wrongKeys, key])
                            }
                        }}
                        onCorrect={key => {
                            const isNewCorrectKey = !includes(correctKeys, key)
                            if (isNewCorrectKey) {
                                setCorrectKeys([...correctKeys, key])
                            }
                        }}
                    />
                    <br />
                    <br />
                    <div>
                        Wrong keys : {wrongKeys.join(', ')}
                    </div>
                    <br />
                    <Scoreboard
                        hasWon={hasWon}
                        hasLost={hasLost}
                    />
                </div>
            </div>
        </div>
    )
}
