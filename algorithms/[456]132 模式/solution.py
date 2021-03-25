# topics = ["栈", "贪心算法"]

from sortedcontainers import SortedList
from typing import List


class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        """
        【贪心思想】遍历中间值，左边值尽量小（事先遍历一次），右边值尽量大（排序列表 + 二分查找）
        """
        n = len(nums)
        if n < 3:
            return False

        # 左侧最小值
        left_min = nums[0]
        # 右侧所有元素
        right_all: List[int] = SortedList(nums[2:])

        for j in range(1, n - 1):
            if left_min < nums[j]:
                index: int = right_all.bisect_right(left_min)
                if index < len(right_all) and right_all[index] < nums[j]:
                    return True
            # 更新左侧最小值
            left_min = min(left_min, nums[j])
            # 更新排序容器
            right_all.remove(nums[j + 1])

        return False
