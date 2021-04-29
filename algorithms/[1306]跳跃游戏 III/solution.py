# topics = ["广度优先遍历"]

from typing import Deque, List, Set
from collections import deque


class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        """
        BFS
        time O(n), space O(n), n 为数组长度
        """
        n = len(arr)
        q: Deque[int] = deque()
        visited: Set[int] = set()

        q.append(start)
        while q:
            i = q.popleft()
            visited.add(i)

            pre, next = i - arr[i], i + arr[i]
            if 0 <= pre < n and pre not in visited:
                q.append(pre)
            if 0 <= next < n and next not in visited:
                q.append(next)

        for k, v in enumerate(arr):
            if v == 0 and k in visited:
                return True

        return False
