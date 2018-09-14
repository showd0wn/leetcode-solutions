class Solution:
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        i = len(s) - 1
        result = 0

        while(i >= 0):
            curr = dict[s[i]]
            result += curr

            if i > 0 and dict[s[i - 1]] < curr:
                result -= dict[s[i - 1]]
                i -= 1
            i -= 1

        return result
