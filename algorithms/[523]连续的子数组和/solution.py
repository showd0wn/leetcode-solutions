# topics = ["数组", "哈希表"]

from typing import Dict, List


class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        """
        前缀和 & 哈希表
        time O(n), space O(min(n, k)), n 为数组长度
        """
        # 记录前缀和及其对应下标
        d: Dict[int, int] = dict()
        d.setdefault(0, -1)

        preSum = 0

        for i, num in enumerate(nums):
            preSum += num
            if preSum % k in d and i - d[preSum % k] > 1:
                return True
            # 不会覆盖已存在的值
            d.setdefault(preSum % k, i)

        return False
