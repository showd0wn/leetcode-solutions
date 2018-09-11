class Solution:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        len = m + n
        m -= 1
        n -= 1
        while len > 0:
            len -= 1
            if (n < 0 or m >= 0 and nums1[m] > nums2[n]):
                nums1[len] = nums1[m]
                m -= 1
            else:
                nums1[len] = nums2[n]
                n -= 1
