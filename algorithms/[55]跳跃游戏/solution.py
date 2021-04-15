# topics = ["贪心算法"]

from typing import List


class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        max_i = 0

        # 正向遍历，更新能到达的最远位置
        for i in range(n):
            if i <= max_i:
                max_i = max(max_i, i + nums[i])
                if max_i >= n - 1:
                    return True

        return False
