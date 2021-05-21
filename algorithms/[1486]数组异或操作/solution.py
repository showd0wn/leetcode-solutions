# # topics = ["位运算", "数学"]


class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        """
        Bit Manipulation & Math
        time O(1), space O(1)
        【参考】 https://leetcode-cn.com/problems/xor-operation-in-an-array/solution/shu-zu-yi-huo-cao-zuo-by-leetcode-solution/
        """
        s = start >> 1
        e = n & start & 1
        ret = self.sumXor(s - 1) ^ self.sumXor(s + n - 1)
        return ret << 1 | e

    def sumXor(self, x: int) -> int:
        if x % 4 == 0:
            return x
        if x % 4 == 1:
            return 1
        if x % 4 == 2:
            return x + 1
        return 0
