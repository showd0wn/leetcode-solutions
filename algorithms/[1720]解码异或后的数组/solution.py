# topics = ["位运算"]

from typing import List


class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        """
        Bit Manipulation
        异或运算性质:
        1. 归零律    a ^ a = 0
        2. 恒等律    a ^ 0 = a
        3. 交换律    a ^ b = b ^ a
        4. 结合律    a ^ b ^ c = a ^ (b ^ c)
        5. 自反律    a ^ b ^ a = b
        time O(n), space O(1), n 为 encoded 的长度, 返回值不计入空间复杂度
        """
        res = [first]

        for num in encoded:
            res.append(num ^ res[-1])

        return res
