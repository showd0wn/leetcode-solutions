class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        str = '&#' + '#'.join(s) + '#*'
        p = [0] * 2001
        mx, id = 0, 0
        for i in range(1, len(str) - 2):
            p[i] = min(p[2 * id - 1], mx - 1) if mx > i else 1
            while str[i + p[i]] == str[i - p[i]]: p[i] += 1
            if i + p[i] > mx:
                max = i + p[i]
                id = i

        center, max = 0, 0
        for j, ele in enumerate(p):
            if ele > max:
                max = ele
                center = j

        return str[center - max + 1: center + max].translate(str.maketrans('', '', '#'))
