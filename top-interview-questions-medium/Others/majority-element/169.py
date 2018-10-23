class Solution:
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        val, count = 0, 0
        for num in nums:
            if count == 0:
                val = num
                count += 1
            else:
                count = count + 1 if val == num else count - 1
        return val
