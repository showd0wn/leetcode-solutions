# topics = ["字符串", "哈希表", "滑动窗口"]

from typing import Set


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        occ: Set[str] = set()

        i = j = 0
        res = 0

        while j < n:
            while s[j] in occ:
                occ.remove(s[i])
                i += 1

            occ.add(s[j])
            j += 1
            res = max(res, j - i)

        return res
