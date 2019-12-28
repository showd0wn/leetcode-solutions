/**
 * @param {number} n
 * @return {string}
 */

// eslint-disable-next-line no-unused-vars
const countAndSay = function(n) {
    if (n === 1) return '1'
    const say = function(str) {
        const len = str.length
        let idx = 0
        let newStr = ''
        while (idx < len) {
          let occurrences = 1
          while (str[idx + 1] && str[idx + 1] === str[idx]) {
            idx += 1
            occurrences += 1
          }
          newStr += occurrences + str[idx]
          idx += 1
        }
        return newStr
    }
    return say(countAndSay(n - 1))
}
