# topics = ["位运算"]


class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        """
        Bit Manipulation
        time O(1), space O(1)
        """
        if n <= 0:
            return False
        if n & (n - 1) != 0:
            return False

        # 4 的幂除以 3 的余数一定为 1。而 2 的幂除以 3 的余数一定为 2。
        return n % 3 == 1
