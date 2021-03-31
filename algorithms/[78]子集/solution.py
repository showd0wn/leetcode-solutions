# topics = ["数组"]

from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        """
        广度优先搜索
        """
        q: List[List[int]] = [[]]

        for num in nums:
            q += [li + [num] for li in q]

        return q
