class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        n = len(s)
        # 记录字符出现的个数
        num = [0] * 26
        maxn = left = right = 0

        while right < n:
            num[ord(s[right]) - ord('A')] += 1

            # 更新窗口内重复字符出现的最大值
            maxn = max(maxn, num[ord(s[right]) - ord('A')])

            # 窗口内除了出现次数最多的字符之外，剩余字符数量大于 k 个
            if right - left + 1 - maxn > k:
                num[ord(s[left]) - ord('A')] -= 1
                left += 1

            right += 1

        # right - left 在整个过程是非递减的。只要 right 的值加进去不满足条件，left 和 right 就一起右滑
        # 因为长度小于 right - left 的区间就没必要考虑了，所以 right - left 一直保持为当前的最大值
        return right - left
