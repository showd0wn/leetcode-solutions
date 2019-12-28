from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(list(set(nums)))


s = Solution()
print(s.containsDuplicate([1, 2, 10, 4, 3, 0, 2]))
