class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums)
        if length == 0: return 0
        if length == 1: return nums[0]
        li = list(range(length + 1))
        li[0] = 0
        li[1] = nums[0]
        li[2] = max(nums[0], nums[1])
        for i in range(3, length + 1):
            li[i] = max(li[i - 1], li[i - 2] + nums[i - 1])
        return li[length]
