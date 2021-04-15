// topics = ["动态规划"]

function rob(nums: number[]): number {
  const n = nums.length;
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return nums[0];
  }

  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i += 1) {
    [first, second] = [second, Math.max(first + nums[i], second)];
  }

  return second;
}
