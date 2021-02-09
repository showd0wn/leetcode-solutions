# topics = ["滑动窗口"]


class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        n = len(s)
        record = [abs(ord(t[i]) - ord(s[i])) for i in range(n)]

        # 滑动窗口 求和小于 maxCost 的最长连续子串
        i = j = 0
        total = 0
        res = 0
        while j < n:
            total += record[j]

            while total > maxCost:
                res = max(res, j - i)
                total -= record[i]
                i += 1

            j += 1

        return max(res, j - i)
