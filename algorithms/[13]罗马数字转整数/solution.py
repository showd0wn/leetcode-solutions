# topics = ["数学"]


class Solution:
    def romanToInt(self, s: str) -> int:
        """
        模拟
        time O(n), space O(1), n 为 s 长度
        """
        n = len(s)
        d = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }

        res = 0
        for i, ch in enumerate(s):
            value = d[ch]
            if i < n - 1 and value < d[s[i + 1]]:
                res -= value
            else:
                res += value

        return res
