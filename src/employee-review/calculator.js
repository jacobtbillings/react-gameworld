import { sortBy, forEach, map } from 'lodash'

const getAnswers = (selections) => {
    const answers = {}
    forEach(selections, (selection) => {
        const answer = selection.answer
        answers[answer]
            ? answers[answer]++
            : answers[answer] = 1
    })
    return answers
}



export const getResult = (selections) => {
    const answers = getAnswers(selections)
    const people = map(answers, (a,b) => {
        return {weight:a, value:b}
    })
    const sorted = sortBy(people, ['weight'])
    const result = sorted[sorted.length - 1]
    return result
} 
