import { times } from "lodash"

let possibleIdxs

let max 

/**
 * random number is generated between 0 and max
 * @returns number
 */
const getRandomInt = () => {
    return Math.floor(Math.random() * max);
}

/**
 * this returns a random index without repeating
 * @returns 
 */
const getRandomIdx = () => {
    const i = getRandomInt()
    if (possibleIdxs[i]) {
        possibleIdxs[i] = false;
        return i
    } else {
        return getRandomIdx()
    }

}

/**
 * this grabs a randomized set of items from a list and maps based on count
 * @param {number} count 
 * @param {array} items 
 * @returns {item}

 */
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