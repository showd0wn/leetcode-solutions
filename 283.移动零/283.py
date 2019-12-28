from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in range(len(nums))[::-1]:
            if (nums[i]):
                continue
            nums.append(nums.pop(i))


list = [0, 1, 0, 3, 12]
s = Solution()
s.moveZeroes(list)
print(list)
