/**
 * @param {string} s
 * @return {string}
 */
// 参考：https://www.felix021.com/blog/read.php?2040
var longestPalindrome = function(s) {
  const str = `#${s.split('').join('#')}#`
  let p = [], mx = 0, id = 0
  for (let i = 0; i < str.length; i++) {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1
    while (str[i + p[i]] && str[i - p[i]] && str[i + p[i]] === str[i - p[i]]) p[i]++
    if (i + p[i] > mx) {
      mx = i + p[i]
      id = i
    }
  }
  let center = 0, max = 0
  for (let j = 0; j < p.length; j++) {
    if (p[j] > max) {
      max = p[j]
      center = j
    }
  }
  return str.slice(center - max + 1, center + max).replace(/#/g, '')
}
