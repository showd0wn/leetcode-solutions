from math import floor
from random import random


class Solution:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.nums = nums or []

    def reset(self):
        """
        Resets the array to its original configuration and return it.
        :rtype: List[int]
        """
        return self.nums

    def shuffle(self):
        """
        Returns a random shuffling of the array.
        :rtype: List[int]
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
