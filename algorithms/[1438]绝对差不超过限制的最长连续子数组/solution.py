from typing import List, Deque
from collections import deque


class Solution:
    # 超时
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        q: Deque[int] = deque()
        res = 0

        for idx, ele in enumerate(nums):
            q.append(ele)
            while max(q) - min(q) > limit:
                q.popleft()
            res = max(res, len(q))

        return res

    # 队列维护滑动窗口 [l, r] 内的最大最小值
    def longestSubarray2(self, nums: List[int], limit: int) -> int:
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
