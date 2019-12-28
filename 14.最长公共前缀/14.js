/**
 * @param {string[]} strs
 * @return {string}
 */

// eslint-disable-next-line no-unused-vars
const longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    const first = strs[0]
    const length = first.length
    let result = ''
    for (let i = 0; i < length; i++) {
        if (strs.some(item => first[i] !== item[i])) break
            result += first[i]
        }
    return result
}
