# topics = ["回溯算法", "栈"]

from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        """近似题 17.电话号码的字母组合"""
        res: List[str] = []
        path: List[str] = []

        def backtrack(idx: int = 0) -> None:
            if len(path) == n * 2:
                res.append(''.join(path))
                return
            for ch in ['(', ')']:
                path.append(ch)
                backtrack(idx + 1)
                path.pop()

        backtrack()

        return list(filter(self.isValid, res))

    def isValid(self, s: str) -> bool:
        """同 20.有效的括号"""
        stack: List[str] = []

        for ch in s:
            if ch == ')':
                if not stack or stack[-1] != '(':
                    return False
                stack.pop()
            else:
                stack.append(ch)

        return not stack
