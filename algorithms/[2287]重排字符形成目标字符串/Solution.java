// topics = ["哈希表"]

class Solution {
    public int rearrangeCharacters(String s, String target) {
        int[] arr = new int[26];
        for (int i = 0; i < s.length(); i++) {
            arr[s.charAt(i) - 'a'] += 1;
        }

        int res = 0;

        while (true) {
            for (int i = 0; i < target.length(); i++) {
                arr[target.charAt(i) - 'a'] -= 1;
                if (arr[target.charAt(i) - 'a'] < 0) {
                    return res;
                }
            }
            res += 1;
        }
    }
}