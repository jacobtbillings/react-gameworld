import questions from "./questions"
import { getRandomItems } from "./get-random-item"

export const getRandomQuestions = (count) => {
    return getRandomItems(count, questions)
} 