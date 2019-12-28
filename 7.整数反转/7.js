/**
 * @param {number} x
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
const reverse = function(x) {
    const limit = 2 ** 31

    if (x > limit) return 0
    const bool = x > 0
    const array = String(Math.abs(x)).split('').reverse()
    const number = Number(array.join(''))

    if (number > limit) return 0
    return bool ? number : 0 - number
}
