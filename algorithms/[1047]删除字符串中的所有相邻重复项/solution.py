# topics = ["字符串", "栈"]


from typing import List


class Solution:
    def removeDuplicates(self, S: str) -> str:
        stack: List[str] = []

        for ch in S:
            if stack and stack[-1] == ch:
                stack.pop()
            else:
                stack.append(ch)

        return ''.join(stack)
