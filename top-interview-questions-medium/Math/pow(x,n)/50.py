class Solution:
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        if n == 0: return 1
        elif n == 1: return x
        elif n == -1: return 1 / x
        elif n % 2 == 0:
            m = self.myPow(x, n / 2)
            return m * m
        else: return x * self.myPow(x, n - 1)
