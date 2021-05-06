// topics = ["数组", "动态规划"]

/**
 * DP
 * time O(n), space O(n), n 为数组长度
 */
function maxTurbulenceSize(arr: number[]): number {
  const n = arr.length;

  // dp[i][0] 为以 arr[i] 结尾，且 arr[i-1] > arr[i] 的「湍流子数组」的最大长度
  // dp[i][1] 为以 arr[i] 结尾，且 arr[i-1] < arr[i] 的「湍流子数组」的最大长度
  const dp = new Array(n).fill(0).map(() => new Array<number>(2).fill(0));
  dp[0][0] = dp[0][1] = 1;

  for (let i = 1; i < n; i += 1) {
    if (arr[i - 1] > arr[i]) {
      dp[i][0] = dp[i - 1][1] + 1;
    } else if (arr[i - 1] < arr[i]) {
      dp[i][1] = dp[i - 1][0] + 1;
    } else {
      dp[i][0] = dp[i][1] = 1;
    }
  }

  let res = 1;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, dp[i][0]);
    res = Math.max(res, dp[i][1]);
  }
  return res;
}

/**
 * DP + 空间复杂度优化
 * time O(n), space O(1), n 为数组长度
 */
function maxTurbulenceSize2(arr: number[]): number {
  const n = arr.length;
  let dp0 = 1;
  let dp1 = 1;
  let res = 1;

  for (let i = 1; i < n; i += 1) {
    if (arr[i - 1] > arr[i]) {
      dp0 = dp1 + 1;
      dp1 = 1;
    } else if (arr[i - 1] < arr[i]) {
      dp1 = dp0 + 1;
      dp0 = 1;
    } else {
      dp0 = 1;
      dp1 = 1;
    }
    res = Math.max(res, dp0);
    res = Math.max(res, dp1);
  }

  return res;
}
