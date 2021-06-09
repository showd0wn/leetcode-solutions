// topics= ["动态规划"]

/**
 * Dynamic Programming
 * time O(len * n * minProfit), space O(len * n * minProfit), len 为工作总数
 */
function profitableSchemes(n: number, minProfit: number, group: number[], profit: number[]): number {
  const len = group.length;
  const MOD = 1e9 + 7;

  // dp[i][j][k] 表示前 i 个工作中选择了 j 个员工，并且利润至少为 k 的情况下的方案数
  const dp = new Array(len + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0).map(() => new Array<number>(minProfit + 1).fill(0)));
  dp[0][0][0] = 1;

  for (let i = 1; i <= len; i += 1) {
    const members = group[i - 1];
    const earn = profit[i - 1];
    for (let j = 0; j <= n; j += 1) {
      for (let k = 0; k <= minProfit; k += 1) {
        if (j < members) {
          dp[i][j][k] = dp[i - 1][j][k];
        } else {
          dp[i][j][k] = (dp[i - 1][j][k] + dp[i - 1][j - members][Math.max(0, k - earn)]) % MOD;
        }
      }
    }
  }

  let sum = 0;
  for (let j = 0; j <= n; j += 1) {
    sum = (sum + dp[len][j][minProfit]) % MOD;
  }

  return sum;
}
