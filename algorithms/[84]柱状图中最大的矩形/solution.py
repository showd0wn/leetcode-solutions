# topics = ["数组", "栈"]

from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        """
        利用栈确定每个柱的边界（小于当前柱高度），（当前柱高度 * 边界之间隔）== 可能值之一
        近似题 42.接雨水
        """
        # 边界哨兵
        heights = [0] + heights + [0]
        n = len(heights)
        # 单调递增栈（非严格）
        stack: List[int] = []
        res = 0

        for i in range(n):
            while stack and heights[stack[-1]] > heights[i]:
                cur = stack.pop()
                # stack[-1] 和 i 分别为 cur 的左右边界
                dis = i - stack[-1] - 1
                res = max(res, heights[cur] * dis)

            # 索引入栈
            stack.append(i)

        return res
