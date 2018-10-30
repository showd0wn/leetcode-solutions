/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const set = []

  const helper = s => {
    s = String(s)
    let val = 0
    for (let i of s.split('')) {
      val += Number(i) ** 2
    }
    return val
  }

  while (true) {
    n = helper(n)
    if (n === 1) return true
    if (set.includes(n)) return false
    set.push(n)
  }
}
