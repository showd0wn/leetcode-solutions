from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        while k > 0:
            nums.insert(0, nums.pop())
            k -= 1


arr = [1, 2, 3, 4, 5, 6, 7]
s = Solution()
s.rotate(arr, 3)
print(arr)
