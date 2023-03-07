// topics = ["动态规划"]

class Solution {
    /**
     * 后缀和 + 动态规划
     * time O(n^3), space O(n^2), n 为数组长度
     */
    public int stoneGameII(int[] piles) {
        int n = piles.length;

        // 后缀和
        int[] postfixSum = new int[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            postfixSum[i] = postfixSum[i + 1] + piles[i];
        }

        // dp[i][m] 表示先手玩家从索引 i 开始, M 为 m 的情况下，能拿到的最大分数
        int[][] dp = new int[n][(n + 1) / 2 + 1];

        for (int i = n - 1; i >= 0; i--) {
            for (int m = 1; m <= (n + 1) / 2; m++) {
                if (i + m * 2 < n) {
                    for (int k = 1; k <= m * 2; k++) {
                        dp[i][m] = Math.max(dp[i][m], postfixSum[i] - dp[i + k][Math.min(Math.max(m, k), n / 2)]);
                    }
                } else {
                    dp[i][m] = postfixSum[i];
                }
            }
        }

        return dp[0][1];
    }
}