// topics = ["数组", "贪心算法"]

import java.util.Arrays;

class Solution {
    /**
     * 贪心
     * time O(nlogn) space O(logn), n 为数组长度
     */
    public int getMaximumConsecutive(int[] coins) {
        Arrays.sort(coins);

        int min = 0, max = 0;

        for (int coin : coins) {
            if (coin > max + 1) {
                break;
            }
            max += coin;
        }

        return max - min + 1;
    }
}