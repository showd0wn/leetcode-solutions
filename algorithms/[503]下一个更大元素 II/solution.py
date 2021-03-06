# topics = ["栈"]

from typing import List


class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res: List[int] = [-1] * n
        stack: List[int] = []

        for i in range(n * 2 - 1):
            while stack and nums[stack[-1]] < nums[i % n]:
                res[stack.pop()] = nums[i % n]
            stack.append(i % n)

        return res
