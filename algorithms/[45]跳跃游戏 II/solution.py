# topics = ["贪心算法"]

from typing import List


class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return 0

        i, max_i = 0, nums[0]
        steps = 0

        while max_i < n - 1:
            # 正向遍历, 每次选择跳跃能到达最远位置的位置（贪心）
            for next in range(i + 1, max_i + 1):
                if next + nums[next] > max_i:
                    max_i = next + nums[next]
                    i = next
            steps += 1

        return steps + 1
