# topics = ["双指针"]

from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        res = 0
        left_max = right_max = 0

        # 参考 https://leetcode-cn.com/leetbook/read/learning-algorithms-with-leetcode/x18bji/
        left, right = 0, n - 1
        while left < right:
            if height[left] < height[right]:
                if height[left] < left_max:
                    res += left_max - height[left]
                else:
                    left_max = height[left]
                left += 1

            else:
                if height[right] < right_max:
                    res += right_max - height[right]
                else:
                    right_max = height[right]
                right -= 1

        return res
