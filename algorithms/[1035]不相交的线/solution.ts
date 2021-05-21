// topics = ['动态规划']

/**
 * Dynamic Programming
 * time O(mn), space O(mn), m 和 n 分别为 nums1 和 nums2 的长度
 */
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  // dp[i][j] 表示 nums1 前 i 个元素和 nums2 前 j 个元素能绘制的最多不相交的线数
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 0; i <= m; i += 1) {
    dp[i][1] = nums1.slice(0, i).includes(nums2[0]) ? 1 : 0;
  }

  for (let j = 0; j <= n; j += 1) {
    dp[1][j] = nums2.slice(0, j).includes(nums1[0]) ? 1 : 0;
  }

  for (let i = 2; i <= m; i += 1) {
    for (let j = 2; j <= n; j += 1) {
      if (nums1[i - 1] == nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
