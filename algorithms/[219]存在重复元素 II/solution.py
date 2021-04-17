# topics = ["哈希表"]

from typing import Dict, List


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        d: Dict[int, int] = {}

        for i, v in enumerate(nums):
            if v not in d:
                d.setdefault(v, i)
            elif i - d[v] <= k:
                return True
            d[v] = i

        return False
