# topics = ["位运算"]


class Solution:
    def reverseBits(self, n: int) -> int:
        res = 0

        for i in range(32):
            # 读取二进制的第 i 位
            t = (n >> i) & 1
            if t:
                # 设置二进制的对称位
                res |= t << (31 - i)

        return res
