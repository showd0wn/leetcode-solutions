# topics = ["位运算"]


class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            # 该运算将 n 的二进制表示的最后一个 1 变成 0
            n &= n - 1
            res += 1
        return res
