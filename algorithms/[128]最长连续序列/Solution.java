// topics = ["哈希表"]

import java.util.HashSet;
import java.util.Set;

class Solution {
    /**
     * time O(n), space O(n), n 为字符串长度
     */
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }

        int res = 0;
        for (int num : set) {
            // 对于 num, 如果存在 num - 1 则忽略。
            if (!set.contains(num - 1)) {
                int count = 1;
                while (set.contains(num + 1)) {
                    num += 1;
                    count += 1;
                }
                res = Math.max(res, count);
            }
        }

        return res;
    }
}