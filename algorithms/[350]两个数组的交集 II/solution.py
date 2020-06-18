from typing import List


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        for num in nums1:
            if (num in nums2):
                result.append(nums2.pop(nums2.index(num)))
        return result
