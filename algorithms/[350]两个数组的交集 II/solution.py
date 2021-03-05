# topics = ["数组", "哈希表"]

from typing import List


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result: List[int] = []
        for num in nums1:
            if num in nums2:
                nums2.remove(num)
                result.append(num)
        return result
