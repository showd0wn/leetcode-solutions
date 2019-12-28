/**
 * @param {number[]} nums
 * @return {boolean}
 */

// eslint-disable-next-line no-unused-vars
var containsDuplicate = function(nums) {
    return nums.length !== Array.from(new Set(nums)).length
}
