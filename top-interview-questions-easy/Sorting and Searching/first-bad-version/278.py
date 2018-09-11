# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
# def isBadVersion(version):

from math import floor


class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        left = 1
        right = n
        while left < right:
            mid = floor((left + right) / 2)
            if (isBadVersion(mid)):
                right = mid
            else:
                left = mid + 1
        return left
