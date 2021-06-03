# topics = ["数组", "哈希表"]

from typing import Dict, List


class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        """
        前缀和 & 哈希表
        time O(n), space O(n), n 为数组长度
        近似题 523.连续的子数组和
        """
        # 记录前缀和及其对应下标
        d: Dict[int, int] = dict()
        d.setdefault(0, -1)

        preSum = 0
        res = 0

        for i, num in enumerate(nums):
            preSum += 1 if num == 1 else -1
            if preSum in d:
                res = max(res, i - d[preSum])
            d.setdefault(preSum, i)

        return res
