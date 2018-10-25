/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const helper = s => s.charCodeAt() - 64
  const arr = s.split('').reverse()
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    res += 26 ** i * helper(arr[i])
  }
  return res
}
