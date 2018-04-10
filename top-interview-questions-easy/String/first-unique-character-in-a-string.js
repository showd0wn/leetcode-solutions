/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var len = s.length
  for (var i = 0; i < len; i++) {
    var char = s[i]
    if (s.indexOf(char) === s.lastIndexOf(char)) return i
  }
  return -1
}
