// topics = ["动态规划"]

/**
 * Dynamic Programming
 * time O(n * target), space O(target), n 为 cost 的长度
 */
function largestNumber(cost: number[], target: number): string {
  // dp[i] 表示前 i 个数组成整数的最大位数
  const dp = new Array(target + 1).fill(-Number.MAX_VALUE);
  dp[0] = 0;

  for (const c of cost) {
    for (let j = c; j <= target; j += 1) {
      // 滚动数组
      dp[j] = Math.max(dp[j], dp[j - c] + 1);
    }
  }

  // 无法得到任何整数
  if (dp[target] < 0) {
    return '0';
  }

  const res: string[] = [];
  // 状态倒退
  for (let i = 8, j = target; i >= 0; i -= 1) {
    for (let c = cost[i]; j >= c && dp[j] === dp[j - c] + 1; j -= c) {
      res.push(String.fromCharCode('1'.charCodeAt(0) + i));
    }
  }

  return res.join('');
}
