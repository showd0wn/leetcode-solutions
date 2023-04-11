// topics = ["滑动窗口"]

class Solution {
    /**
     * time O(n), space O(1), n 为字符串长度
     */
    public int minimumRecolors(String blocks, int k) {
        int i = 0;
        int cnt = 0;
        while (i < k) {
            if (blocks.charAt(i) == 'W') {
                cnt += 1;
            }
            i += 1;
        }

        int res = cnt;
        for (; i < blocks.length(); i++) {
            if (blocks.charAt(i - k) == 'W') {
                cnt -= 1;
            }
            if (blocks.charAt(i) == 'W') {
                cnt += 1;
            }
            res = Math.min(res, cnt);
        }

        return res;
    }
}