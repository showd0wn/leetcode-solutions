# topics = ["数学"]

from typing import List
from operator import xor
from functools import reduce


class Solution:
    def xorGame(self, nums: List[int]) -> bool:
        """
        Math
        time O(n), space O(1), n 为数组长度
        参考 https://leetcode-cn.com/problems/chalkboard-xor-game/solution/hei-ban-yi-huo-you-xi-by-leetcode-soluti-eb0c/
        """
        # 当且仅当以下两个条件至少满足一个时，先手必胜：
        # 1. 数组 nums 的全部元素的异或结果等于 0；
        # 2. 数组 nums 的长度是偶数
        return len(nums) % 2 == 0 or reduce(xor, nums) == 0
