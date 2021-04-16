# topics = ["数组"]

from functools import cmp_to_key
from typing import List


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        def compare(a: int, b: int) -> int:
            x = y = 10
            while x <= a:
                x *= 10
            while y <= b:
                y *= 10

            return x * b + a - (y * a + b)

        nums.sort(key=cmp_to_key(compare))

        if nums[0] == 0:
            return '0'

        return ''.join(map(str, nums))
