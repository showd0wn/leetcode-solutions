# topics = ["二分搜索"]

from sys import maxsize
from typing import List
from sortedcontainers import SortedList


class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
        """
        参考1 https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/solution/ju-xing-qu-yu-bu-chao-guo-k-de-zui-da-sh-70q2/
        参考2 https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/solution/gong-shui-san-xie-you-hua-mei-ju-de-ji-b-dh8s/
        """
        m, n = len(matrix), len(matrix[0])
        res = -maxsize - 1

        # 枚举上边界
        for i in range(m):
            total = [0] * n
            # 枚举下边界
            for j in range(i, m):
                for c in range(n):
                    # 更新每列的元素和
                    total[c] += matrix[j][c]

                totalSet = SortedList([0])
                s = 0
                for v in total:
                    # 前缀和
                    s += v
                    lb = totalSet.bisect_left(s - k)
                    if lb != len(totalSet):
                        res = max(res, s - totalSet[lb])
                    totalSet.add(s)

        return res
