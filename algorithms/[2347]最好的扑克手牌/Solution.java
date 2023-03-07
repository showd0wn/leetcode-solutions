// topics = ["数组", "哈希表"]

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
    /**
     * time O(n), space O(n), n 为 ranks 长度
     */
    public String bestHand(int[] ranks, char[] suits) {
        Set<Character> suitsSet = new HashSet<Character>();
        for (char suit : suits) {
            suitsSet.add(suit);
        }
        if (suitsSet.size() == 1) {
            return "Flush";
        }

        Map<Integer, Integer> h = new HashMap<Integer, Integer>();
        for (int rank : ranks) {
            h.put(rank, h.getOrDefault(rank, 0) + 1);
        }
        if (h.size() == 5) {
            return "High Card";
        }

        for (int val : h.values()) {
            if (val > 2) {
                return "Three of a Kind";
            }
        }

        return "Pair";
    }
}