/**
 * @param {number[]} digits
 * @return {number[]}
 */

// eslint-disable-next-line no-unused-vars
const plusOne = function(digits) {
    const len = digits.length
    for (let i = len - 1; i >= 0; i -= 1) {
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    return [1, ...digits]
}
