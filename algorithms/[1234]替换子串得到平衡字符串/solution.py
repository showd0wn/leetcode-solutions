# topics = ["哈希表", "滑动窗口"]

from collections import Counter


class Solution:
    def balancedString(self, s: str) -> int:
        """
        time O(|Σ|·n), space o(|Σ|), n 为 str 长度，|Σ| = 4
        """
        n = len(s)

        # target 对超出平均数的字符进行计数
        target = Counter(s)
        for ch, cnt in target.items():
            target[ch] = max(cnt - n // 4, 0)

        if target.total() == 0:
            return 0

        # current 对滑动窗口中的字符进行计数
        current: Counter[str] = Counter()
        i = j = 0
        res = n

        while j < n:
            current[s[j]] += 1
            j += 1
            # 当 current 与 target 相等，或者是后者的超集时，[i, j) 为符合要求的子串
            while current >= target:
                res = min(res, j - i)
                current[s[i]] -= 1
                i += 1

        return res
