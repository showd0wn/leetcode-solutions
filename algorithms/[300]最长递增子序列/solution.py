# topics = ["贪心算法", "二分查找"]

import bisect
from typing import List


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        """
        参考 https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
        """
        d: List[int] = []

        for num in nums:
            if not d or num > d[-1]:
                d.append(num)
            else:
                id = bisect.bisect_left(d, num)
                d[id] = num

        return len(d)
