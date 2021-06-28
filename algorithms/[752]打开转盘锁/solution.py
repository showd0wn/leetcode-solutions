# topics = ["广度优先搜索", "哈希表", "字符串"]

from typing import Deque, Dict, List
from collections import deque


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        """
        BFS + Hash Table
        time O(b^d * d^2 + m * d), space O(b^d * d + m), 其中 b = 10, d = 4, m 是 deadends 长度
        """
        visited = set(deadends)

        if '0000' in visited:
            return -1

        q: Deque[str] = deque()
        q.append('0000')
        res = 0

        while q:
            for i in range(len(q)):
                s = q.popleft()
                if s == target:
                    return res
                for i, d in enumerate(s):
                    inc = s[:i] + str((int(d) + 1) % 10) + s[i + 1 :]
                    dec = s[:i] + str((int(d) - 1) % 10) + s[i + 1 :]
                    if inc not in visited:
                        q.append(inc)
                        visited.add(inc)
                    if dec not in visited:
                        q.append(dec)
                        visited.add(dec)
            res += 1

        return -1

    def openLock2(self, deadends: List[str], target: str) -> int:
        """
        双向 BFS
        大致思路：
            1. 创建「两个队列」（q1、q2）分别用于两个方向的搜索；
            2. 创建「两个哈希表」（m1、m2）用于「解决相同节点重复搜索」和「记录转换次数」；
            3. 为了尽可能让两个搜索方向“平均”，每次从队列中取值进行扩展时，先判断哪个队列容量较少；
            4. 如果在搜索过程中「搜索到对方搜索过的节点」，说明找到了最短路径。
        """
        start = '0000'
        if start in deadends:
            return -1

        m1: Dict[str, int] = {start: 0}
        m2: Dict[str, int] = {target: 0}

        q1: Deque[str] = deque([start])
        q2: Deque[str] = deque([target])

        def update(q: Deque[str], cur: Dict[str, int], other: Dict[str, int]) -> int:
            s = q.popleft()
            step = cur[s]
            if s in other:
                return step + other[s]
            for i, d in enumerate(s):
                inc = s[:i] + str((int(d) + 1) % 10) + s[i + 1 :]
                dec = s[:i] + str((int(d) - 1) % 10) + s[i + 1 :]
                if inc not in deadends and inc not in cur:
                    q.append(inc)
                    cur.setdefault(inc, step + 1)
                if dec not in deadends and dec not in cur:
                    q.append(dec)
                    cur.setdefault(dec, step + 1)
            return -1

        #  只有两个队列都不空，才有必要继续往下搜索
        while q1 and q2:
            t = -1
            if len(q1) < len(q2):
                t = update(q1, m1, m2)
            else:
                t = update(q2, m2, m1)
            if t != -1:
                return t

        return -1
