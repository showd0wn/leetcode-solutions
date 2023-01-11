# topics = ["二分查找"]

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def guessNumber(self, n: int) -> int:
        """
        Binary Search
        time O(logn), space O(1)
        """
        left, right = 1, n

        while left <= right:
            mid = (left + right) // 2
            if guess(mid) == 0:
                return mid
            if guess(mid) == 1:
                left = mid + 1
            if guess(mid) == -1:
                right = mid - 1

        return -1
