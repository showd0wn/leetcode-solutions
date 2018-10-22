class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        if m == 1 or n == 1: return 1
        arr = [1] * n
        for i in range(1, m):
            for j in range(1, n):
                arr[j] += arr[j - 1]

        return arr[n - 1]
