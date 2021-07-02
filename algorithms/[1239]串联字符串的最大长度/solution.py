# topics = ["回溯算法", "位运算"]

from typing import List


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        """
        回溯 + 位运算
        time O(∣Σ∣ + 2 ^ n), space O(n), ∣Σ∣位 arr 中所有字符串长度和, n 位 arr 的长度
        """
        masks: List[int] = []

        # 先筛选出无重复字母的字符串
        for s in arr:
            mask = 0
            for ch in s:
                idx = ord(ch) - ord('a')
                # 若 mask 已有 ch，则说明 s 含有重复字母，无法构成可行解
                if (mask >> idx) & 1:
                    mask = 0
                    break
                mask |= 1 << idx
            if mask > 0:
                masks.append(mask)

        res = 0

        # pos 表示我们当前处理 masks 中的第 pos 个数, mask 表示当前已连接字符串对应的二进制数
        def backtrack(pos: int, mask: int) -> None:
            if pos == len(masks):
                nonlocal res
                res = max(res, bin(mask).count('1'))
                return

            # mask 和 masks[pos] 无公共元素
            if (mask & masks[pos]) == 0:
                backtrack(pos + 1, mask | masks[pos])
            backtrack(pos + 1, mask)

        backtrack(0, 0)

        return res
