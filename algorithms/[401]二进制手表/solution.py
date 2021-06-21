# topics = ["回溯算法"]

from typing import List


class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        """
        Backtrack
        time O(1), space O(1)
        """
        res: List[str] = []
        path = [0] * 10

        def backtrack(s: int = 0):
            if path.count(1) == turnedOn:
                h, m = self.pathToTime(path)
                if self.isValid(h, m):
                    res.append(f'{h}:{m if m > 9 else f"0{m}"}')
                return
            for i in range(s, 10):
                path[i] = 1
                backtrack(i + 1)
                path[i] = 0

        backtrack()

        return res

    def pathToTime(self, path: List[int]) -> List[int]:
        h, m = 0, 0
        for i in range(0, 4):
            h += path[i] * 2 ** (3 - i)
        for i in range(4, 10):
            m += path[i] * 2 ** (9 - i)
        return [h, m]

    def isValid(self, hour: int, minute: int) -> bool:
        return hour < 12 and minute < 60
