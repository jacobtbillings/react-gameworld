import {includes, every} from 'lodash'

const letterRegEx = /[a-z]/
export const isComplete = (answer, correctKeys) => {
    const title = answer.Title.toLowerCase()
    return every(title, (key) => {
        const isLetter = letterRegEx.test(key) && key.length===1
        const isIncluded = includes(correctKeys, key)
        return (isLetter && isIncluded) || !isLetter
    })
}
