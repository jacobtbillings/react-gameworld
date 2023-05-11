import React from 'react'

import results from './results'
import './index.css'

const Result = ({result, open, setOpen }) => {
    if (!result || !open) {
        return null
    }
    const value = result.value
    const answer = results[value]
    return (
        <div className='result-modal-wrapper'>
            <div className='results-scrim' onClick={() => {
                setOpen(false)
            }} />
            <div className='result-modal'>
                <h1>{answer.Character}</h1>
                <img 
                alt = {`iconic gif of ${answer.Character} from the Office`}
                src={answer.gif}/>
                <br/>
                <div className='result-modal-body'>
                    <h3>&ldquo;{answer.Quote}&rdquo;</h3>
                    <p>{answer.Description}</p>
                </div>
                <button
                    className='result-modal-close'
                    onClick={ () => {
                        setOpen(false)
                    }}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Result;
