// topics = ["贪心算法"]

import java.util.Arrays;

class Solution {
    /**
     * 贪心 + 模拟，每次优先给需求数量多的杯子装水
     * time O(1), space O(1)
     */
    public int fillCups(int[] amount) {
        int res = 0;

        Arrays.sort(amount);
        while (amount[1] > 0) {
            amount[1] -= 1;
            amount[2] -= 1;
            Arrays.sort(amount);
            res += 1;
        }

        return res + amount[2];
    }
}