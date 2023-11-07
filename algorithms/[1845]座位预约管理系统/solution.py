# topic = ["堆"]

import heapq


class SeatManager:
    """
    堆(优先队列)
    初始化 time O(n), 添加/弹出 time O(logn); space O(n), n 为座位数量
    """

    def __init__(self, n: int):
        self.pq = []
        for i in range(n):
            heapq.heappush(self.pq, i + 1)

    def reserve(self) -> int:
        return heapq.heappop(self.pq)

    def unreserve(self, seatNumber: int) -> None:
        heapq.heappush(self.pq, seatNumber)


# Your SeatManager object will be instantiated and called as such:
# obj = SeatManager(n)
# param_1 = obj.reserve()
# obj.unreserve(seatNumber)
