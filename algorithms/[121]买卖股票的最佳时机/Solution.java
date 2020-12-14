//给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。 
//
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。 
//
// 注意：你不能在买入股票前卖出股票。 
//
// 
//
// 示例 1: 
//
// 输入: [7,1,5,3,6,4]
//输出: 5
//解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 
//
// 示例 2: 
//
// 输入: [7,6,4,3,1]
//输出: 0
//解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
// 
// Related Topics 数组 动态规划


import java.lang.reflect.Array;
import java.util.Arrays;

//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;
        if (len < 2) {
            return 0;
        }

        // 0：不进行任何操作
        // 1：用户执行了一次买入操作
        // 2：用户执行了一次卖出操作

        // 状态转移方程：
        // dp[i][0] 永远等于 0
        // dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        // dp[i][2] = max(dp[i - 1][2], dp[i - 1][1] + prices[i])


        // 注意：如果是 `[7, 6, 5, 4, 3]` 这种波动，应该不交易，
        // 因此输出是：max(dp[len - 1][0], dp[len - 1][2])

        int[][] dp = new int[len][3];
        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        // 这里状态 2 不应该有值，设置为 0 不影响正确性
        dp[0][2] = 0;
        for (int i = 1; i < len; i++) {
            // 可以不显式赋值，因为 int 的初值就是 0
            dp[i][0] = 0;
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
            dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        }
        return Math.max(dp[len - 1][0], dp[len - 1][2]);
    }
}
//leetcode submit region end(Prohibit modification and deletion)
