class Solution:
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        m1 = float("inf")
        m2 = float("inf")

        for num in nums:
            if m1 >= num:
                m1 = num
            elif m2 >= num:
                m2 = num
            else:
                return True

        return False
