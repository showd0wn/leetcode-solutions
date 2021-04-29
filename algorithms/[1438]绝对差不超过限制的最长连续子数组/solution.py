# topics = ["滑动窗口", "队列", "平衡二叉搜索树"]

from typing import List, Deque
from collections import deque
from sortedcontainers import SortedList


class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        """
        滑动窗口 + max/min 函数
        超时 time O(n^2), space O(n), n 为数组长度
        """
        q: Deque[int] = deque()
        res = 0

        for ele in nums:
            q.append(ele)
            while max(q) - min(q) > limit:
                q.popleft()
            res = max(res, len(q))

        return res

    def longestSubarray2(self, nums: List[int], limit: int) -> int:
        """
        【滑动窗口 + 队列】维护滑动窗口 [l, r] 内的最大最小值
        time O(n), space O(n), n 为数组长度
        """
        max_q: Deque[int] = deque()
        min_q: Deque[int] = deque()
        left = 0
        res = 0

        for right, ele in enumerate(nums):
            # 单调不减队列
            while max_q and max_q[-1] > ele:
                max_q.pop()
            max_q.append(ele)

            # 单调不增队列
            while min_q and min_q[-1] < ele:
                min_q.pop()
            min_q.append(ele)

            while max_q and min_q and min_q[0] - max_q[0] > limit:
                if nums[left] == max_q[0]:
                    max_q.popleft()
                if nums[left] == min_q[0]:
                    min_q.popleft()
                left += 1

            res = max(res, right - left + 1)

        return res

    def longestSubarray3(self, nums: List[int], limit: int) -> int:
        """
        【滑动窗口 + 排序容器】 sortedcontainers
        time O(nlogn), space O(n), n 为数组长度
        """
        s = SortedList()
        n = len(nums)
        left = right = res = 0

        while right < n:
            s.add(nums[right])
            while s[-1] - s[0] > limit:
                s.remove(nums[left])
                left += 1
            res = max(res, right - left + 1)
            right += 1

        return res
