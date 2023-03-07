# topics = ["字符串", "栈"]

from typing import List


class Solution:
    def minimumDeletions(self, s: str) -> int:
        """
        统计可配对 ba 对数
        time O(n), space O(1), n 为字符串长度
        """
        # 用一个栈统计字符 b，遇到 a 时出栈（非空）
        stk: List[str] = []
        res = 0

        for ch in s:
            if stk and ch == "a":
                stk.pop()
                res += 1
            elif ch == "b":
                stk.append("b")

        return res
