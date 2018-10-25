class Solution:
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        set = []
        while (1):
            n = self.helper(n)
            if n == 1: return True
            if n in set: return False
            set.append(n)

    def helper(self, s):
        s = str(s)
        val = 0
        for i in list(s):
            val += int(i) ** 2
        return val
