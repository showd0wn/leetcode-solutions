// topics = ["动态规划"]

function PredictTheWinner(nums: number[]): boolean {
  const n = nums.length;
  // dp[i][j] 表示玩家一在区间 [i, j] 能拿到的最大分数
  const dp = Array.from({ length: n }, () => new Array<number>(n));

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = i; j < n; j += 1) {
      if (j == i) {
        dp[i][j] = nums[i];
      } else if (j == i + 1) {
        dp[i][j] = Math.max(nums[i], nums[j]);
      } else {
        const left = nums[i] + Math.min(dp[i + 2][j], dp[i + 1][j - 1]);
        const right = nums[j] + Math.min(dp[i + 1][j - 1], dp[i][j - 2]);

        dp[i][j] = Math.max(left, right);
      }
    }
  }

  const sum = nums.reduce((acc, cur) => (acc += cur), 0);
  return dp[0][n - 1] >= sum / 2;
}
