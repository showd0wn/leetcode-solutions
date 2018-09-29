/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  const helper = (list, curr, open, close, max) => {
    if (curr.length === max * 2) {
      list.push(curr)
      return
    }
    if (open < max) {
      helper(list, curr + '(', open + 1, close, max)
    }
    if (close < open) {
      helper(list, curr + ')', open, close + 1, max)
    }
  }
  helper(result, '', 0, 0, n)
  return result
}
