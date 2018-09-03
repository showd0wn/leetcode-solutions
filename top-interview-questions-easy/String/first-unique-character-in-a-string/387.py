class Solution:
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        for char in s:
            if s.index(char) == s.rindex(char):
                return s.index(char)
        return -1

        # indexs = [s.index(c) for c in s if s.index(c) == s.rindex(c)]
        # return min(indexs or [-1])
