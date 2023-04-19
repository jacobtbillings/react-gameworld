import { times } from "lodash"

let possibleIdxs

let max 

const getRandomInt = () => {
    return Math.floor(Math.random() * max);
}

const getRandomIdx = () => {
    const i = getRandomInt()
    if (possibleIdxs[i]) {
        possibleIdxs[i] = false;
        return i
    } else {
        return getRandomIdx()
    }

}

export const getRandomItems = (count, items) => {
    const randomItems = []
    max = items.length
    possibleIdxs = {}
    times(max, (i) => {
        possibleIdxs[i] = true
    })
    for (var i = 0; i < count; i++) {
        const item = items[getRandomIdx()]
        randomItems.push(item)
    }
    return randomItems
} 