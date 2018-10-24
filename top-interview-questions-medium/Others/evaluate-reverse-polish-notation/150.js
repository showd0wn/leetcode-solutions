/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  for (let i of tokens) {
    const val = Number(i)
    if (isNaN(val)) {
      const v2 = stack.pop()
      const v1 = stack.pop()
      if (i === '+') {
        stack.push(v1 + v2)
      } else if (i === '-') {
        stack.push(v1 - v2)
      } else if (i === '*') {
        stack.push(v1 * v2)
      } else if (i === '/') {
        stack.push(~~(v1 / v2))
      }
    } else {
      stack.push(val)
    }
  }
  return stack[0]
}
