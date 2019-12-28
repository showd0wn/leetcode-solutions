from typing import List
from functools import reduce


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(lambda acc, cur: acc ^ cur, nums, 0)


s = Solution()
print(s.singleNumber([2, 2, 1]))
