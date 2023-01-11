# topics = ["滑动窗口"]


class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        l, n = len(haystack), len(needle)

        for i in range(l - n + 1):
            if haystack[i : i + n] == needle:
                return i

        return -1
