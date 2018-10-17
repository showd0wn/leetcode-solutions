class Solution:
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        length = len(nums)
        if not length or nums[0] > target or nums[length - 1] < target: return [-1, -1]

        lb, rb = -1, -1

        start, end = 0, length - 1
        while start + 1 < end:
            mid = int((start + end) / 2)
            if nums[mid] < target:
                start = mid
            else:
                end = mid
        if nums[start] == target:
            lb = start
        elif nums[end] == target:
            lb = end

        start, end = 0, length - 1
        while start + 1 < end:
            mid = int((start + end) / 2)
            if nums[mid] > target:
                end = mid
            else:
                start = mid
        if nums[end] == target:
            rb = end
        elif nums[start] == target:
            rb = start

        return [lb, rb]
