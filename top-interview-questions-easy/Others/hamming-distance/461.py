class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        distance = 0
        z = x ^ y
        while z:
            distance += z & 1
            z >>= 1
        return distance
