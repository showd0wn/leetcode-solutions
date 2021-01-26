function removeDuplicates(nums: number[]): number {
  for (let i = nums.length - 1; i >= 1; i -= 1) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};
