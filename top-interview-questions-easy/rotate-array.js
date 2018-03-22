var rotate = function(nums, k) {
  nums.unshift(...nums.splice(-k % nums.length))
}
