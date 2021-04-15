// topics = ["动态规划"]

function rob(nums: number[]): number {
  const n = nums.length;
  if (n == 1) {
    return nums[0];
  }
  if (n == 2) {
    return Math.max(nums[0], nums[1]);
  }
  // 分两段范围计算最高总金额
  return Math.max(robRange(nums.slice(1)), robRange(nums.slice(0, -1)));
}

function robRange(nums: number[]): number {
  const n = nums.length;
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i += 1) {
    [first, second] = [second, Math.max(first + nums[i], second)];
  }

  return second;
}
