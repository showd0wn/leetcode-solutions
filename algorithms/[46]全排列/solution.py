# topics = ["回溯算法"]
from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res: List[List[int]] = []

        def backtrack(x: int = 0) -> None:
            if x == n:
                res.append(nums[:])

            for i in range(x, n):
                nums[x], nums[i] = nums[i], nums[x]
                backtrack(x + 1)
                nums[x], nums[i] = nums[i], nums[x]

        backtrack()

        return res
