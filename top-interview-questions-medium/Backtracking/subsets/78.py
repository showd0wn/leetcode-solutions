class Solution:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if not len(nums): return []
        if len(nums) == 1: return [[], [nums[0]]]
        last = self.subsets(nums[:-1])
        return last + list(map(lambda v: v + nums[-1:], last))
