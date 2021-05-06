# topics = ["队列"]

from typing import Deque
from collections import deque


class RecentCounter:
    """
    Queue
    time O(Q), space O(W), Q 为 ping 的次数, W = 3000
    """

    def __init__(self):
        self.queue: Deque[int] = deque()

    def ping(self, t: int) -> int:
        self.queue.append(t)
        while self.queue and self.queue[0] < t - 3000:
            self.queue.popleft()

        return len(self.queue)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)