/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^= cur, 0)
}
