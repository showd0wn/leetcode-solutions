# topics = ["回溯算法"]

from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        n = len(s)
        res: List[str] = []
        path: List[str] = [''] * 4

        def backtrack(idx: int = 0, seg: int = 0) -> None:
            print(path, idx, seg)
            if seg == 4:
                if idx == n:
                    res.append('.'.join(path))
                return

            if idx == n:
                return

            if s[idx] == '0':
                path[seg] = '0'
                backtrack(idx + 1, seg + 1)

            addr = ''
            for i in range(idx, n):
                addr += s[i]
                if 0 < int(addr) <= 255:
                    path[seg] = addr
                    backtrack(i + 1, seg + 1)
                else:
                    break

        backtrack()

        return res
