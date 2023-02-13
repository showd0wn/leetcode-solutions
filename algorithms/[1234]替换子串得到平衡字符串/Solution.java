// topics=["哈希表","滑动窗口"]

import java.util.HashMap;
import java.util.Map;

class Solution {
    /**
     * time O(|Σ|·n), space o(|Σ|), n 为 str 长度，|Σ| = 4
     */
    public int balancedString(String s) {
        int n = s.length();

        // map 对滑动窗口外的字符进行计数
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if (map.containsKey(ch)) {
                map.put(ch, map.get(ch) + 1);
            } else {
                map.put(ch, 1);
            }
        }

        if (check(map, n / 4)) {
            return 0;
        }

        int i = 0, j = 0, res = n;
        while (j < n) {
            char right = s.charAt(j);
            map.put(right, map.get(right) - 1);
            j += 1;
            // 当滑动窗口外的字符均不超过平均数时，[i, j) 为符合要求的子串
            while (check(map, n / 4)) {
                res = Math.min(res, j - i);
                char left = s.charAt(i);
                map.put(left, map.get(left) + 1);
                i += 1;
            }
        }

        return res;
    }

    public boolean check(Map<Character, Integer> map, int avg) {
        if (map.containsKey('Q') && map.get('Q') > avg) {
            return false;
        }
        if (map.containsKey('W') && map.get('W') > avg) {
            return false;
        }
        if (map.containsKey('E') && map.get('E') > avg) {
            return false;
        }
        if (map.containsKey('R') && map.get('R') > avg) {
            return false;
        }
        return true;
    }
}
