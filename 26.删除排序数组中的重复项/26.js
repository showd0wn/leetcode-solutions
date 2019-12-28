/**
 * @param {number[]} nums
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
const removeDuplicates = function(nums) {
    for (let i = nums.length - 1; i > 0; i -= 1) {
        if (nums[i] === nums[i - 1]) nums.splice(i, 1)
    }
    return nums.length
}
