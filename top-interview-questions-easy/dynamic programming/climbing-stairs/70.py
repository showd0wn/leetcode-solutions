class Solution:
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 0 or n == 1 or n == 2:
            return n
        r = [0] * (n + 1)
        r[1] = 1
        r[2] = 2
        for i in range(3, n + 1):
            r[i] = r[i - 1] + r[i - 2]
        return r[n]
