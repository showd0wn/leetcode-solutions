# topics = ["位运算"]

from typing import List
from functools import reduce


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(lambda acc, cur: acc ^ cur, nums, 0)
