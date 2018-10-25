class Solution:
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        arr = list(s)
        arr.reverse()
        res = 0
        for i, ele in enumerate(arr):
            res += 26 ** i * self.helper(arr[i])
        return res

    def helper(self, s):
        return ord(s) - 64
