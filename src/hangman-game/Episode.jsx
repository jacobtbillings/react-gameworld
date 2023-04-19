import React from 'react'
import cn from 'clsx'

export default function Episode ({
    answer,
     hasWon,
     hasLost,
 }) {
    return (
        <div className='episode'>
            <h3 className= {cn({
                win: hasWon,
                loss: hasLost
            })}>
                Season {answer["Season Number"]}, Episode {answer.Episode}
            </h3>
            <h4>
                Hint: {answer["Hint"]}
            </h4>
        </div>
    )
}
