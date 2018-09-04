/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  var first = strs[0]
  var length = first.length
  var result = ''
  for (var i = 0; i < length; i++) {
    if (strs.some(item => first[i] !== item[i])) break
    result += first[i]
  }
  return result
}
