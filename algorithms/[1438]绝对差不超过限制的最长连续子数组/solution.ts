function longestSubarray(nums: number[], limit: number): number {
  const n = nums.length;
  let res = 0;

  for (let i = 0; i < n; i += 1) {
    let max = nums[i];
    let min = nums[i];
    for (let j = i; j < n; j += 1) {
      max = Math.max(nums[j], max);
      min = Math.min(nums[j], min);
      if (max - min > limit) {
        res = Math.max(res, j - i);
        break;
      } else if (j == n - 1) {
        // 遍历到数组结尾，便可中止
        return Math.max(res, j - i + 1);
      }
    }
  }

  return res;
};
