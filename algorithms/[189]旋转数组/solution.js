/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    for (; k > 0; k -= 1) {
        nums.unshift(nums.pop())
    }
}
