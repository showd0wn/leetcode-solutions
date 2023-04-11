// topics = ["数组", "哈希表"]

import java.util.HashMap;
import java.util.Map;

class Solution {
    /**
     * 1.设所有元素的和为 S1，去掉的元素和为 S2。S1 − S2 能被 p 整除，即 S1，S2 对 p 同余。
     * (S1 - S2) mod p = 0 ==> S1 mod p = S2 mod p
     * 
     * 2.利用前缀和, S2 可以转化为前缀和之差（f 为前缀和函数, S1 mod p 记为 x）。
     * S2 mod p = S1 mod p ==> (f[i] - f[j]) mod p = x
     * 
     * 3.进一步转化
     * ==> (f[i] - f[j] - x) mod p = 0
     * ==> (f[j] + x) mod p = f[i] mod p （再次利用同余）
     * 
     * 4.遍历前缀和数组，并用哈希表存储 (f[i] + x) mod p。如果哈希表中包含 f[i] mod p, 则找到符合要求的一对前缀和。
     * 
     * 前缀和 & 哈希表
     * time O(n), space O(n), n 为数组长度
     */
    public int minSubarray(int[] nums, int p) {
        int n = nums.length;

        // 计算前缀和
        long[] f = new long[n + 1];
        for (int i = 0; i < n; i++) {
            f[i + 1] = f[i] + nums[i];
        }

        // 计算 x
        long x = f[n] % p;
        if (x == 0) {
            return 0;
        }

        // 利用哈希表查找
        Map<Long, Integer> map = new HashMap<>();
        int res = n;
        for (int i = 0; i < n + 1; i++) {
            if (map.containsKey(f[i] % p)) {
                res = Math.min(res, i - map.get(f[i] % p));
            }
            map.put((f[i] + x) % p, i);
        }

        return res == n ? -1 : res;
    }
}