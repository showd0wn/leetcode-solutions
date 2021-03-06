# topics = ["栈"]

from typing import List


class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        n = len(T)
        res: List[int] = [0] * n

        # 单调栈
        stack: List[int] = []

        for j in range(n):
            while stack and T[stack[-1]] < T[j]:
                i = stack.pop()
                res[i] = j - i
            stack.append(j)

        return res
