from math import floor
from random import random
from typing import List


class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums or []

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        return self.nums

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        result = []
        numsCopy = self.nums[:]
        while len(numsCopy) > 0:
            index = floor(random() * len(numsCopy))
            result.append(numsCopy[index])
            numsCopy.pop(index)
        return result


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
