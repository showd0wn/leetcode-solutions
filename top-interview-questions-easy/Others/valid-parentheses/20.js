/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  s.split('').forEach((item) => {
    if (!stack.length) {
      stack.push(item)
      return
    }
    let top = stack[stack.length - 1]
    let dis = item.charCodeAt() - top.charCodeAt()
    if (dis === 1 || dis === 2 ) {
      stack.pop()
    } else {
      stack.push(item)
    }
  })
  return !stack.length
}
