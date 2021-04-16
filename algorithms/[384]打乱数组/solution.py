# topics = ["设计"]

from typing import List
from random import randint


class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums
        self.ori = nums[:]

    def reset(self) -> List[int]:
        return self.ori

    def shuffle(self) -> List[int]:
        """
        洗牌算法
        """
        n = len(self.nums)
        for i in range(n)[::-1]:
            j = randint(0, i)
            self.nums[i], self.nums[j] = self.nums[j], self.nums[i]

        return self.nums


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
