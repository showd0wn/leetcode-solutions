# topics = ["回溯算法"]

from typing import Dict, List


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        n = len(digits)
        res: List[str] = []
        path: List[str] = []
        d: Dict[str, str] = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }

        def backtrack(idx: int = 0) -> None:
            if len(path) == n:
                res.append(''.join(path))
                return
            strs = d[digits[idx]]
            for s in strs:
                path.append(s)
                backtrack(idx + 1)
                path.pop()

        backtrack()

        return res
