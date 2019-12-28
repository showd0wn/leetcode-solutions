/**
 * @param {string} s
 * @return {boolean}
 */

// eslint-disable-next-line no-unused-vars
const isPalindrome = function(s) {
    const str = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
    return str === str.split('').reverse().join('')
}
