/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// eslint-disable-next-line no-unused-vars
const twoSum = function(nums, target) {
    const len = nums.length
    for (let i = 0; i < len; i += 1) {
        const j = nums.lastIndexOf(target - nums[i])
        if (j !== -1 && j !== i) return [i, j]
    }
    return null
}
