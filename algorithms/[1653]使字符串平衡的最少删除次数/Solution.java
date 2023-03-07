// topics = ["双指针"]

import java.util.ArrayList;
import java.util.List;

class Solution {
    /**
     * time O(n), space O(n), n 为字符串长度
     */
    public int minimumDeletions(String s) {
        int len = s.length();
        // a 和 b 分别为字符串中字符 a 和 b 的索引数组
        List<Integer> a = new ArrayList<>();
        List<Integer> b = new ArrayList<>();

        for (int i = 0; i < len; i++) {
            if (s.charAt(i) == 'a') {
                a.add(i);
            } else {
                b.add(i);
            }
        }

        int m = a.size(), n = b.size();
        int res = Math.max(m, n);

        // 双指针遍历，[0, i] + [j, n - 1] 为满足条件的区间
        int i = m - 1, j = n - 1;
        while (i >= 0 && j >= 0) {
            while (i >= 0 && a.get(i) > b.get(j)) {
                i--;
            }
            res = Math.max(res, i + 1 + n - j);
            j--;
        }

        return len - res;
    }

    /**
     * time O(n), space O(1), n 为字符串长度
     */
    public int minimumDeletions2(String s) {
        // 在原字符串相邻的两个字符之间划一条间隔，a 表示间隔右侧的字符 a 数量，b表示间隔左侧的 b 数量
        int a = 0, b = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'a') {
                a++;
            }
        }

        int res = a;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == 'a') {
                a--;
            } else {
                b++;
            }
            res = Math.min(res, b + a);
        }

        return res;
    }
}
