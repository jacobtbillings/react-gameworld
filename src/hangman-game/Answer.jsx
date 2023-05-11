import React, {useState} from 'react'
import {includes, map} from 'lodash'
import cn from 'clsx'

const letterRegEx = /[a-z]/
const LIMIT = 12
export default function Answer ({
        answer,
        correctKeys,
        hasWon,
        hasLost,
        onNewGame,
        onIncorrect,
        onCorrect,
        inputRef,
    }) {
    const gameOver = hasWon || hasLost
    const [isFocused, setIsFocused] = useState(false)
    let count = 0
    return (
        <React.Fragment>
            <div className='answer-comp' spellCheck='false' >
                <div
                    spellCheck='false'
                    className={ cn({ isFocused })}>

                    {map(answer.Title, (char, idx) => {
                        const isSpace = char===' '
                        const lowerChar = char.toLowerCase()
                        const isSpecialChar = !letterRegEx.test(lowerChar) && !isSpace
                        count++
                        const shouldWrap = count >= LIMIT
                        const shouldBr = isSpace //&& shouldWrap
                        const isCorrectKey = !isSpace && !isSpecialChar && includes(correctKeys, lowerChar)
                        const isMissingChar = gameOver && !isCorrectKey && !isSpecialChar && !isSpace
                        if (shouldBr) {
                            count = 0
                        }
                        return (
                            <React.Fragment key={idx}>
                                {shouldBr
                                    ? <br />
                                : (
                                    <div
                                        className={ cn('display-letter', {
                                            'special': isSpecialChar,
                                            'correct': isCorrectKey,
                                            'missing': isMissingChar,
                                        })}>
                                        {isSpace ? '' : char}
                                    </div>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
                <input
                    spellCheck='false'
                    ref={inputRef}
                    autoFocus='on'
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                    onKeyPress={(event) => {
                        const title = answer.Title.toLowerCase()
                        const keyCode = event.keyCode || event.which;
                        const key = String.fromCharCode(keyCode).toLowerCase()
                        const isEnter = keyCode === 13
                        const isLetter = letterRegEx.test(key) && key.length===1
                        const isIncluded = includes(title, key)
                        if (isEnter && gameOver) {
                            onNewGame()
                            return
                        }
                        if (isLetter && !gameOver) {
                            if (isIncluded) {
                                onCorrect(key)
                            } else {
                                onIncorrect(key)
                            }
                        }
                    }}
                />
            </div>
                <div>
                    <button
                        className='new-game'
                        onClick={onNewGame}
                        >
                        New Game
                    </button>
                </div>
        </React.Fragment>
    )
}
