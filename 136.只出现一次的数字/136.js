/**
 * @param {number[]} nums
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
const singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^= cur, 0)
}
