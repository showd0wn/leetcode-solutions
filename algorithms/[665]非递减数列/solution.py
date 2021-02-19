# topics = ["数组", "贪心算法"]

from typing import List


class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        n = len(nums)

        if n == 1:
            return True

        # 标识是否还能修改
        flag: bool = nums[0] <= nums[1]

        for i in range(1, n - 1):
            if nums[i] > nums[i + 1]:
                if flag:
                    # 尽可能不放大 nums[i + 1]，这样会让后续非递减更困难
                    if nums[i + 1] >= nums[i - 1]:
                        nums[i] = nums[i + 1]
                    else:
                        nums[i + 1] = nums[i]
                    flag = False
                else:
                    return False

        return True
