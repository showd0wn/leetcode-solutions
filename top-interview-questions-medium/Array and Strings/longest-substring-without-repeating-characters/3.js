/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length
  if (len < 2) return len

  let max = 0
  let last = 0
  for (let i = 1; i < len; i++) {
    let before = s.lastIndexOf(s[i], i - 1)
    if (before < last) {
      max = Math.max(i - last + 1, max)
    } else {
      max = Math.max(i - before, max)
      last = before + 1
    }
  }
  return max
}
