/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let m1 = Number.MAX_VALUE
  let m2 = Number.MAX_VALUE

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if (m1 >= cur) {
      m1 = cur
    } else if (m2 >= cur) {
      m2 = cur
    } else {
      return true
    }
  }
  return false
}
