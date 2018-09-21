class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) < 2: return len(s)

        maxL, last = 0, 0
        for i in range(1, len(s)):
            before = s.rfind(s[i], 0, i)
            if before < last:
                maxL = max(i - last + 1, maxL)
            else:
                maxL = max(i - before, maxL)
                last = before + 1
        return maxL
