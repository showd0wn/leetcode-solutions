# topics = ["贪心算法", "滑动窗口"]

from collections import deque
from typing import Deque, List


class Solution:
    def minKBitFlips(self, A: List[int], K: int) -> int:
        """
        贪心策略，从左到右遍历，遇到每个 0 都把它以及后面的 K-1 个元素进行翻转
        参考 https://leetcode-cn.com/problems/minimum-number-of-k-consecutive-bit-flips/solution/hua-dong-chuang-kou-shi-ben-ti-zui-rong-z403l/
        time O(n), space O(K), n 为数组长度
        """
        n = len(A)
        q: Deque[int] = deque()
        res = 0

        for i in range(n):
            if q and i >= q[0] + K:
                q.popleft()

            # 当前数为 0，且队列长度为偶数（代表已翻转了 0 次），说明当前元素需要翻转
            # 当前数为 1，且队列长度为奇数（代表已翻转了 1 次），说明当前元素需要翻转
            if len(q) % 2 == A[i]:
                if i + K > n:
                    return -1
                q.append(i)
                res += 1

        return res
