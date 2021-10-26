class Solution {
    public String longestPalindrome(String s) {
        int len = s.length();
        boolean[][] dp = new boolean[len][len];
        String ans = "";
        // 枚举子串的长度为 l+1
        for (int l = 0; l < len; l++) {
            for (int i = 0; i < len; i++) {
                int j = i + l;
                if (j >= len) {
                    break;
                }
                else if (l == 0) {
                    dp[i][j] = true;
                }
                else if (l == 1) {
                    dp[i][j] = s.charAt(i) == s.charAt(j);
                }
                else {
                    dp[i][j] = dp[i + 1][j - 1] && s.charAt(i) == s.charAt(j);
                }

                if (dp[i][j]) {
                    ans = l + 1 > ans.length() ? s.substring(i, j + 1) : ans;
                }
            }
        }
        return ans;
    }
}
