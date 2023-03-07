// topics = ["数组", "双指针", "二分查找"]

import java.util.ArrayList;
import java.util.List;

/*
 * // This is the custom function interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *     // Returns f(x, y) for any given positive integers x and y.
 *     // Note that f(x, y) is increasing with respect to both x and y.
 *     // i.e. f(x, y) < f(x + 1, y), f(x, y) < f(x, y + 1)
 *     public int f(int x, int y);
 * };
 */

class Solution {
    /**
     * 同 240.搜索二维数组
     * time O(m + n), space O(1), m 和 n 分别为 x 和 y 取值范围
     */
    public List<List<Integer>> findSolution(CustomFunction customfunction, int z) {
        int i = 1000, j = 1;
        List<List<Integer>> res = new ArrayList<>();

        while (i >= 1 && j <= 1000) {
            if (customfunction.f(i, j) > z) {
                i -= 1;
            } else if (customfunction.f(i, j) < z) {
                j += 1;
            } else {
                res.add(List.of(i, j));
                i -= 1;
                j += 1;
            }
        }

        return res;
    }
}