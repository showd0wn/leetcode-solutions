class Solution:
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        currentSum, totalSum = nums[0], nums[0]
        for i in range(1, len(nums)):
            currentSum = max(nums[i], nums[i] + currentSum)
            totalSum = max(totalSum, currentSum)
        return totalSum
