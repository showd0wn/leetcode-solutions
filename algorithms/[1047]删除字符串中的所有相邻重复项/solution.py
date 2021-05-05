# topics = ["字符串", "栈"]


from typing import List


class Solution:
    def removeDuplicates(self, S: str) -> str:
        """
        Stack
        time O(n), space O(n), n 为字符串长度
        """
        stack: List[str] = []

        for ch in S:
            if stack and stack[-1] == ch:
                stack.pop()
            else:
                stack.append(ch)

        return ''.join(stack)
