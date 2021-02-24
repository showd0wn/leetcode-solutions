// topisc = ["数组", "动态规划"]

function maxSubArray(nums: number[]): number {
  const n = nums.length;
  let dp = nums[0];
  let res = dp;

  for (let i = 1; i < n; i += 1) {
    dp = Math.max(dp + nums[i], nums[i]);
    res = Math.max(res, dp);
  }

  return res;
}
