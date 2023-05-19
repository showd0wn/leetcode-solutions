// topics = ["哈希表"]

import java.util.HashMap;
import java.util.Map;

class Solution {
    /**
     * 前缀和 + 哈希表
     * time O(n), space O(n), n 为数组长度
     */
    public int subarraySum(int[] nums, int k) {
        int n = nums.length;
        int res = 0;

        int preSum = 0;
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);

        for (int i = 0; i < n; i++) {
            preSum += nums[i];
            if (map.containsKey(preSum - k)) {
                res += map.get(preSum - k);
            }
            map.put(preSum, map.getOrDefault(preSum, 0) + 1);
        }

        return res;
    }
}