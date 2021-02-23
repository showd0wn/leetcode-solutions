# topics = ["字符串", "栈"]

from typing import List


class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False

        stack: List[str] = []
        pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        for ch in s:
            if ch in pairs:
                if not stack or stack[-1] != pairs[ch]:
                    return False
                stack.pop()
            else:
                stack.append(ch)

        return not stack
