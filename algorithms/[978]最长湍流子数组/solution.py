# topics = ["数组", "滑动窗口"]

from typing import List


class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        n = len(arr)

        if n < 2:
            return n

        # 左右指针
        i = 0
        j = 1
        # 上一对相邻元素大小关系（后者 - 前者）
        last = 0
        # 最大湍流子数组的长度
        res = 0
        while j < n:
            if arr[j] == arr[j - 1]:
                res = max(res, j - i)
                i = j
            elif last * (arr[j] - arr[j - 1]) > 0:
                res = max(res, j - i)
                i = j - 1
            last = arr[j] - arr[j - 1]
            j += 1

        return max(res, j - i)
