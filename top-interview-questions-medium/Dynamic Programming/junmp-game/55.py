class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        length = len(nums)
        reach = 0
        for i, ele in enumerate(nums):
            if (i > reach or reach >= length - 1): break
            reach = max(reach, i + nums[i])
        return reach >= length - 1
