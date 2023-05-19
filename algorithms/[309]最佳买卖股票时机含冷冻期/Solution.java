// topics = ["动态规划"]

class Solution {
    /**
     * time O(n), space O(n), n 为数组长度
     */
    public int maxProfit(int[] prices) {
        int n = prices.length;

        // dp[i][0] 表示第 i 天持有股票的最大利润
        // dp[i][1] 表示第 i 天未持有股票，且第二天能买入的最大利润
        // dp[i][2] 表示第 i 天未持有股票，且第二天不能买入的最大利润
        int dp[][] = new int[n + 1][3];
        for (int i = 1; i < n; i++) {
            int in = prices[i] - prices[i - 1];
            dp[i + 1][0] = Math.max(dp[i][0] + in, dp[i][1]);
            dp[i + 1][1] = Math.max(dp[i][1], dp[i][2]);
            dp[i + 1][2] = dp[i - 0][0] + in;
        }

        return Math.max(dp[n][1], dp[n][2]);
    }
}