/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const str = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
    return str === str.split('').reverse().join('')
}
