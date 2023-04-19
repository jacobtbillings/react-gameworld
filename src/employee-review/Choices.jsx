import React, { useMemo } from "react"
import { getRandomItems } from "./get-random-item"
import { map , get } from 'lodash'

export default function Choices ({q, questionIdx, onUpdate, selections}) {
    const choices = useMemo(() => {
        return getRandomItems(q.choices.length, q.choices)
    }, [q])
    return (
        <fieldset
            className='field-set'>
            {map(choices, (c, choiceIdx) => {
                const { answer } = c
                return (
                    <div key={choiceIdx}>
                        <input
                            type="radio"
                            className='radio'
                            id={`${questionIdx}-${choiceIdx}`}
                            onChange={() => {
                                onUpdate(questionIdx, choiceIdx, answer)
                            }}
                            checked={get(selections, `[${questionIdx}].choiceIdx`) === choiceIdx}
                        />
                        <label htmlFor={`${questionIdx}-${choiceIdx}`}>{c.choice}</label>
                    </div>
                )
            })}
        </fieldset>
    )
}