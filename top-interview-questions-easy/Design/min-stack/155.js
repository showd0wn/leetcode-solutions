/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (!this.min.length) {
    this.min.push(x)
    return
  }
  this.min.push(Math.min(x, this.getMin()))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.min.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
