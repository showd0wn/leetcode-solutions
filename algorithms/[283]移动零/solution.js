/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    const len = nums.length;
    for (let i = len - 1; i >= 0; i -= 1) {
        if (nums[i]) continue;
        nums.push(nums.splice(i, 1));
    }
};
