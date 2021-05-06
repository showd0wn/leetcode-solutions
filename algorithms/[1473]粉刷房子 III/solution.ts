// topics = ["动态规划"]

/**
 * Dynamic Programming
 * time O(m·n^2 ·target), space O(m·n·target)
 */
function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {
  // 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
  houses = houses.map(c => c - 1);

  // dp(i,j,k) 表示将 [0, i] 的房子都涂上颜色，最末尾的第 i 个房子的颜色为 j，并且它属于第 k 个街区时，需要的最少花费
  const dp = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array<number>(target).fill(Number.MAX_VALUE)));

  // dp 所有元素初始化为极大值
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (houses[i] !== -1 && houses[i] !== j) {
        continue;
      }

      for (let k = 0; k < target; k += 1) {
        for (let j0 = 0; j0 < n; j0 += 1) {
          if (j === j0) {
            if (i === 0) {
              if (k === 0) {
                dp[i][j][k] = 0;
              }
            } else {
              dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j][k]);
            }
          } else if (i > 0 && k > 0) {
            dp[i][j][k] = Math.min(dp[i][j][k], dp[i - 1][j0][k - 1]);
          }
        }

        if (dp[i][j][k] !== Number.MAX_VALUE && houses[i] === -1) {
          dp[i][j][k] += cost[i][j];
        }
      }
    }
  }

  let ans = Number.MAX_VALUE;
  for (let j = 0; j < n; j += 1) {
    ans = Math.min(ans, dp[m - 1][j][target - 1]);
  }

  return ans === Number.MAX_VALUE ? -1 : ans;
}
