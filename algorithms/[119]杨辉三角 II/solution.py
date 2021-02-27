# topics = ["数组", "数学"]

from typing import List


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        """
        利用相邻组合数的递推关系
        参考 https://leetcode-cn.com/problems/pascals-triangle-ii/solution/yang-hui-san-jiao-ii-by-leetcode-solutio-shuk/
        """
        res = [1] * (rowIndex + 1)
        for i in range(1, rowIndex + 1):
            res[i] = int(res[i - 1] * (rowIndex - i + 1) / i)

        return res
