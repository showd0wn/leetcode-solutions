class Solution:
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        min = 0
        max = len(nums) - 1
        mid = int(max / 2)
        while min < max:
            if min == mid: return max if nums[min] < nums[max] else min
            min = mid if nums[mid] < nums[mid + 1] else min
            max = mid if nums[mid] > nums[mid + 1] else max
            mid = int((min + max) / 2)

        return 0
