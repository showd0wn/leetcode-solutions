# topics = ["栈"]

from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        stack: List[int] = []
        res = 0

        for i in range(n):
            while stack and height[stack[-1]] < height[i]:
                cur = stack.pop()
                if not stack:
                    break
                # stack[-1] 和 i 分别为 cur 的左右边界
                dis = i - stack[-1] - 1
                res += (min(height[i], height[stack[-1]]) - height[cur]) * dis

            # 索引入栈
            stack.append(i)

        return res
