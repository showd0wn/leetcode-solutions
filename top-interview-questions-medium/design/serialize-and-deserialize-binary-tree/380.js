/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.nums = []
  this.pos = {}
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.pos[val] !== undefined) return false
  this.nums.push(val)
  this.pos[val] = this.nums.length - 1
  return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.pos[val] === undefined) return false
  const valIdx = this.pos[val]
  const lastItem = this.nums[this.nums.length - 1]
  this.nums[valIdx] = lastItem
  this.pos[lastItem] = valIdx
  this.nums.pop()
  delete this.pos[val]
  return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const idx = Math.floor(Math.random() * this.nums.length)
  return this.nums[idx]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
