# topics = ["动态规划"]

from typing import List


class NumArray:
    def __init__(self, nums: List[int]):
        n = len(nums)
        # 前缀和
        self.pre_sum = [0] * (n + 1)
        for i in range(1, n + 1):
            self.pre_sum[i] = self.pre_sum[i - 1] + nums[i - 1]

    def sumRange(self, i: int, j: int) -> int:
        return self.pre_sum[j + 1] - self.pre_sum[i]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)
