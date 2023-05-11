import React, { useMemo } from 'react'
import { getRandomQuestions } from '../get-random-questions'
import { getResult } from '../calculator'
import { size, map } from 'lodash'
import CompletionIndicator from '../CompletionIndicator'
import Choices from './Choices'

// TODO: display result
// TODO: css for questions and answers to differentiate visually
// TODO: add questions and answers (creed)
// TODO: store answer and create reset button

const questionCount = 10

export default function Quiz ({selections, onUpdate, onSubmit}) {
    const questions = useMemo( () => {
        return getRandomQuestions(questionCount)
    }, [] )
    
    const incomplete = size(selections) !== size(questions)
    return (
        <div>
            <CompletionIndicator selections = {selections} total = {questionCount}/>
            {map(questions, (q, questionIdx) => {
                return (
                    <div key={questionIdx}
                        className='paper'>
                        <strong>{q.question}</strong>
                        <Choices 
                            q={q}
                            questionIdx={questionIdx}
                            onUpdate={onUpdate}
                            selections={selections}

                        />
                    </div>
                )
            })}
            <br/>
            <button
                type="submit"
                className='form-submit-button'
                disabled={incomplete}
                onClick= {()=>{
                    const result = getResult(selections)
                    onSubmit(result)
                }}>
                Submit
            </button>
            <br/>
            <br/>
        </div>

    )
}
