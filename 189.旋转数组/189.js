/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// eslint-disable-next-line no-unused-vars
const rotate = function(nums, k) {
    // nums.unshift(...nums.splice(-k % nums.length))
    for (; k > 0; k -= 1) {
        nums.unshift(nums.pop())
    }
}
