# topics = ["滑动窗口", "队列", "二叉搜索树"]

from collections import deque
from typing import List, Deque

from sortedcontainers import SortedList


class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        """
        暴力 超时
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
        队列维护滑动窗口 [l, r] 内的最大最小值
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
        排序容器 sortedcontainers
        参考 https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solution/jue-dui-chai-bu-chao-guo-xian-zhi-de-zui-5bki/
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
