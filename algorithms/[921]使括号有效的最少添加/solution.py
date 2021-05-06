# topics = ["栈"]

from typing import List


class Solution:
    def minAddToMakeValid(self, S: str) -> int:
        """
        Stack
        time O(n), space O(n), n 为 S 的长度
        """
        stack: List[str] = []

        for s in S:
            if stack and s == ')' and stack[-1] == '(':
                stack.pop()
            else:
                stack.append(s)

        return len(stack)
