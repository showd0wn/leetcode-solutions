// topics = ["贪心算法"]

class Solution {
    /**
     * time O(n), space o(1), n 为字符串长度
     */
    public int minimumSwap(String s1, String s2) {
        int n = s1.length();
        int[] cnt = new int[2];

        for (int i = 0; i < n; i++) {
            char c1 = s1.charAt(i);
            char c2 = s2.charAt(i);
            // 字符组有 4 种情况。相同的不需要交换，只统计不同的字符组。
            if (c1 == 'x' && c2 == 'y') {
                cnt[0] += 1;
            } else if (c1 == 'y' && c2 == 'x') {
                cnt[1] += 1;
            }
        }

        int res = 0;

        // 优先让相同的字符组互相交换
        res += cnt[0] / 2;
        res += cnt[1] / 2;

        if (cnt[0] % 2 == 0 && cnt[1] % 2 == 0) {
            return res;
        }

        if (cnt[0] % 2 == 1 && cnt[1] % 2 == 1) {
            return res + 2;
        }

        return -1;
    }
}