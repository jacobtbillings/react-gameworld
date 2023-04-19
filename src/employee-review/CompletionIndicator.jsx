import React from 'react'
import { times, isEmpty, map } from 'lodash'

const CompletionIndicator = ({selections, total}) => {
    const indexes = []
    if (isEmpty(indexes)) {
        times(total, (i) => {
            indexes.push(i)
        }) 
    }
    return (
        <div className='completion-indicator-wrapper'>
            <div className='completion-indicator'>
                {
                    map(indexes, idx => {
                        const selected = !isEmpty(selections[idx])
                        return (
                            <div 
                                key={idx}
                                className={`indicator${selected ? ' selected' : ''}`}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CompletionIndicator