// topics = ["动态规划"]

function findTargetSumWays(nums: number[], S: number): number {
  const n = nums.length;
  const dp: number[][] = [];
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < n; i += 1) {
    dp[i] = [];
    for (let j = -sum; j <= sum; j += 1) {
      if (i == 0) {
        dp[i][j] = Number(nums[i] == j) + Number(-nums[i] == j);
      } else {
        dp[i][j] = (dp[i - 1][j - nums[i]] ?? 0) + (dp[i - 1][j + nums[i]] ?? 0);
      }
    }
  }

  return dp[n - 1][S] ?? 0;
}

function findTargetSumWays2(nums: number[], S: number): number {
  const n = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let dp: number[] = [];

  for (let i = 0; i < n; i += 1) {
    let next: number[] = [];
    for (let j = -sum; j <= sum; j += 1) {
      if (i == 0) {
        next[j] = Number(nums[i] == j) + Number(-nums[i] == j);
      } else {
        next[j] = (dp[j - nums[i]] ?? 0) + (dp[j + nums[i]] ?? 0);
      }
    }
    dp = next;
  }

  return dp[S] ?? 0;
}
