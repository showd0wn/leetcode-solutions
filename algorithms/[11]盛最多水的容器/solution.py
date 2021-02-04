from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        res = 0

        while left < right:
            leftHeight = height[left]
            rightHeight = height[right]

            res = max(res, (right - left) * min(leftHeight, rightHeight))

            if leftHeight < rightHeight:
                left += 1
            else:
                right -= 1

        return res
