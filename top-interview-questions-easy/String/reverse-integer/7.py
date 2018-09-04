class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        n = int(str(abs(x))[::-1])
        return 0 if x == 0 else ((x > 0) - (x < 0)) * n * (n < 2 ** 31)
