// topics = ["字符串", "哈希表"]

import java.util.HashMap;
import java.util.Map;

/**
 * 哈希表
 * time O(m+n), space O(n + |Σ|), m 和 n 分别为 key 和 message 长度，|Σ| = 26.
 */
class Solution {
    public String decodeMessage(String key, String message) {
        Map<Character, Character> map = new HashMap<>();
        map.put(' ', ' ');

        for (int i = 0, j = 97; i < key.length(); i++) {
            char ch = key.charAt(i);
            if (!map.containsKey(ch)) {
                map.put(ch, (char) j++);
            }
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < message.length(); i++) {
            char ch = message.charAt(i);
            sb.append(map.get(ch));
        }

        return sb.toString();
    }
}
