// topics = ["数学", "位运算"]

import java.util.ArrayList;
import java.util.List;

class Solution {
    /**
     * 类似 89.格雷编码
     * 先使用公式直接求出格雷码，再与 start 按位异或
     * time O(2^n), space O(1), 返回值不计入空间复杂度
     */
    public List<Integer> circularPermutation(int n, int start) {
        List<Integer> ret = new ArrayList<Integer>();
        for (int i = 0; i < 1 << n; i++) {
            ret.add((i >> 1) ^ i ^ start);
        }
        return ret;
    }
}