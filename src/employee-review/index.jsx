import React, {useState} from 'react'
import Title from './Title'
import Quiz from './Quiz'
import Result from './Result'
import './index.css'

const fillOut = <button
    onClick={() => {
        var inputElements = document.getElementsByTagName('input');
        for (let i = 0; i < inputElements.length; i++) {
            var el = inputElements[i]
            var id = el.id
            if (id.includes('-0')) {
                el.click()
            }
        }
    }}>
    Fill out form
</button>

export default function EmployeeReview () {
    const [selections, setSelections] = useState({})
    const [open, setOpen] = useState(true)
    const [result, setResult] = useState()
    return (
        <div className='employee-review'>
            <Title />
            <Quiz
                selections={selections}
                onUpdate={ (key, choiceIdx, answer) => {
                    setSelections({
                        ...selections,
                        [key]:{choiceIdx, answer}
                    })
                }}
                onSubmit={ (result) => {
                    setResult(result) 
                    setOpen(true)
                }}
            />
            {fillOut}
            <Result
                open={open}
                setOpen={setOpen}
                result = {result}    
            />
        </div>
    )
}
