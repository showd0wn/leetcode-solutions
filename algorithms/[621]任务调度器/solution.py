# topics = ["贪心算法"]

from collections import Counter
from typing import List


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        most = Counter(tasks).most_common()
        # 最多的字符出现的次数
        s = most[0][1]
        # 最多的字符的个数
        t = 0
        for _, cnt in most:
            if cnt != s:
                break
            t += 1

        # 完成所有任务的最短时间取决于出现次数最多的任务数量 t
        # 最终答案与 tasks 长度比取较大值
        return max(len(tasks), (s - 1) * (n + 1) + t)
