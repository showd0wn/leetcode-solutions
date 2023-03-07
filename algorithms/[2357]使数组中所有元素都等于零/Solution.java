// topics = ["数组", "哈希表"]

import java.util.HashSet;
import java.util.Set;

class Solution {
    /**
     * 集合 Set
     * times O(n), space O(n), n 为数组长度
     */
    public int minimumOperations(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for (int n : nums) {
            if (n > 0) {
                set.add(n);
            }
        }

        return set.size();
    }
}