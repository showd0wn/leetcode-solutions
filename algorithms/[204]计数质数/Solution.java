//统计所有小于非负整数 n 的质数的数量。 
//
// 示例: 
//
// 输入: 10
//输出: 4
//解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
// 
// Related Topics 哈希表 数学


//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public int countPrimes(int n) {
        int result = 0;
        // 初始化默认值都为 false，为质数标记
        boolean[] isPrimes = new boolean[n];

        // 如果大于 2 则一定拥有 2 这个质数
        if (n > 2) {
            result++;
        }

        // 从 3 开始遍历，且只遍历奇数
        for (int i = 3; i < n; i += 2) {
            // 是质数
            if(!isPrimes[i]) {
                for (int j = 3; i * j < n; j += 2) {
                    // 将当前质数的奇数倍都设置成非质数标记 true
                    isPrimes[i * j] = true;
                }
                result++;
            }
        }
        return result;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
