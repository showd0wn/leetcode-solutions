// topics = ["动态规划"]

/**
 * time O(n^2), space O(n^2), n 为数组长度
 */
function canCross(stones: number[]): boolean {
  const n = stones.length;
  // dp[i][k] 表示青蛙能否达到「现在所处的石子编号」为 i 且「上一次跳跃距离」为 k 的状态
  const dp = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
  dp[0][0] = true;

  for (let i = 1; i < n; i += 1) {
    const k = stones[i] - stones[i - 1];
    //「现在所处的石子编号」为 i 时，「上一次跳跃距离」k 必定满足 k ≤ i
    if (k > i) {
      return false;
    }
  }

  for (let i = 1; i < n; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      const k = stones[i] - stones[j];
      // 同理，从「石子编号」为 j 的位置最多跳出 j + 1 的距离
      if (k > j + 1) {
        break;
      }
      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
      if (i == n - 1 && dp[i][k]) {
        return true;
      }
    }
  }

  return false;
}
