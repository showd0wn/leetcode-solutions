/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var array = s.toLowerCase().match(/[a-z0-9]+/g)
  if (!array) return true
  var newStr = array.join('')
  var length = newStr.length
  var i, j
  for ( i = 0, j = length - 1; i <= j; i++, j--) {
    if (newStr[i] !== newStr[j]) return false
  }
  return true
}
