// topics = ["数组", "哈希表"]

import java.util.HashMap;
import java.util.Map;

class Solution {
    /**
     * time O(n), space O(n), n 为数组长度
     */
    public int[] numberOfPairs(int[] nums) {
        Map<Integer, Integer> counter = new HashMap<>();
        for (int n : nums) {
            counter.put(n, counter.getOrDefault(n, 0) + 1);
        }

        int pairs = 0;
        int left = 0;
        for (int val : counter.values()) {
            pairs += val / 2;
            left += val % 2;
        }

        return new int[] { pairs, left };
    }
}