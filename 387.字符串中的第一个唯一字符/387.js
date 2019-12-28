/**
 * @param {string} s
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
const firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i += 1) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i
    }
    return -1
}
