# topics = ["数组", "哈希表"]

from typing import Dict, List


class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        mp: Dict[int, List[int]] = dict()

        for i, num in enumerate(nums):
            if num in mp:
                mp[num][0] += 1
                mp[num][2] = i
            else:
                mp[num] = [1, i, i]

        max_num = min_len = 0
        for count, left, right in mp.values():
            if max_num < count:
                max_num = count
                min_len = right - left + 1
            elif max_num == count:
                min_len = span if min_len > (span := right - left + 1) else min_len

        return min_len
