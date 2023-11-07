# topics = ["数组", "堆"]

import heapq
from typing import List


class Solution:
    def assignTasks(self, servers: List[int], tasks: List[int]) -> List[int]:
        """
        time O(m + nlogm), space O(m), n 和 m 分别为 servers 和 tasks 长度
        """
        # 工作中的服务器，存储二元组 (t, idx)
        # 默认最小堆，即首服务器满足 t 最小，并且在 t 相同的情况下，idx 最小。
        busy = list()

        # 空闲的服务器，存储二元组 (w, idx)
        #  默认最小堆，即首服务器满足 w 最小，并且在 w 相同的情况下，idx 最小。
        idle = [(w, i) for i, w in enumerate(servers)]
        heapq.heapify(idle)

        # 记录当前时间
        ts = 0
        # 将优先队列 busy 中满足 t<=ts 依次取出并放入优先队列 idle
        def release():
            while busy and busy[0][0] <= ts:
                _, idx = heapq.heappop(busy)
                heapq.heappush(idle, (servers[idx], idx))

        ans = list()
        for i, task in enumerate(tasks):
            ts = max(ts, i)
            release()
            if not idle:
                ts = busy[0][0]
                release()

            _, idx = heapq.heappop(idle)
            ans.append(idx)
            heapq.heappush(busy, (ts + task, idx))

        return ans
