# topics = ["位运算"]

class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        """
        Brian Kernighan 算法
        time O(logC), space O(1), C 为数据范围, 本题中 C = 2 ^ 31, 即 logC = 31
        近似题 191.位1的个数
        """
        z = x ^ y
        res = 0

        while z:
            # 该运算将 z 的二进制表示的最后一个 1 变成 0
            z &= z - 1
            res += 1

        return res
