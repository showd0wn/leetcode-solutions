// topics = ["数组"]

class Solution {
    /**
     * 模拟
     * time O(n), space O(1), n 为 customers 长度
     */
    public int minOperationsMaxProfit(int[] customers, int boardingCost, int runningCost) {
        int n = customers.length;
        // i 为遍历 customers 索引
        int i = 0;
        // p 为当前排队人数
        int p = 0;

        // profit - 当前利润额，times - 当前轮转次数
        // mnaxProfit - 最大利润额，res - 最大利润额对应最小轮转次数
        int profit = 0, times = 0, maxProfit = 0, res = 0;

        while (i < n || p > 0) {
            if (i < n) {
                p += customers[i++];
            }

            int c = Math.min(p, 4);
            profit += c * boardingCost - runningCost;
            if (profit > maxProfit) {
                maxProfit = profit;
                res = times;
            }

            p -= c;
            times += 1;
        }

        if (maxProfit <= 0) {
            return -1;
        }

        return res;
    }
}