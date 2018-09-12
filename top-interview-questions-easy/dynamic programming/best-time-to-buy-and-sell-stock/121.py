class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max_profile, min_profile = 0, float('inf')
        for price in prices:
            min_profile = min(min_profile, price)
            max_profile = max(max_profile, price - min_profile)
        return max_profile
