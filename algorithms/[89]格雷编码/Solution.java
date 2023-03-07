// topics = ["数学", "位运算"]

import java.util.ArrayList;
import java.util.List;

class Solution {
    /**
     * 使用公式直接求出格雷码
     * time O(2^n), space O(1), 返回值不计入空间复杂度
     */
    public List<Integer> grayCode(int n) {
        List<Integer> ret = new ArrayList<Integer>();
        for (int i = 0; i < 1 << n; i++) {
            ret.add((i >> 1) ^ i);
        }
        return ret;
    }
}
