# topics = ["字符串"]

from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        """
        遍历
        time O(mn), space O(1), m 为 strs 中字符串平均长度, n 为 strs 长度
        """
        if not strs:
            return ''

        shortest = min(strs, key=len)

        # 纵向比较
        for i, ch in enumerate(shortest):
            for other in strs:
                if other[i] != ch:
                    return shortest[:i]

        return shortest
