/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1'
  var say = function(str) {
    var len = str.length
    var idx = 0
    var newStr = ''
    while (idx < len) {
      var occurrences = 1
      while (str[idx + 1] && str[idx + 1] === str[idx]) {
        idx++
        occurrences++
      }
      newStr += occurrences + str[idx]
      idx++
    }
    return newStr
  }
  return say(countAndSay(n - 1))
}
