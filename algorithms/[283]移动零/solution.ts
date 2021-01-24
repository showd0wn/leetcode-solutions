/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
    }
  }
};
