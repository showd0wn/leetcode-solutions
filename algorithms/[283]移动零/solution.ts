// topics = ["数组", "双指针"]

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let left = 0;
  let right = 0;

  while (right < n) {
    if (nums[right] != 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
    }
    right += 1;
  }
}
