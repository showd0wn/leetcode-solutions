# topics = ["动态规划", "位运算"]

from typing import List


class Solution:
    def countBits(self, num: int) -> List[int]:
        """
        按位与运算（&）的一个性质是：对于任意整数 x，令 x=x&(x-1)，该运算将 x 的二进制表示的最后一个 1 变成 0
        """
        bits = [0] * (num + 1)
        for i in range(1, num + 1):
            bits[i] = bits[i & (i - 1)] + 1
        return bits
