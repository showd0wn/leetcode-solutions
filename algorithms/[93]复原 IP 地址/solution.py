# topics = ["回溯算法"]

from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        n = len(s)
        res: List[str] = []
        path: List[str] = [''] * 4

        def backtrack(idx: int = 0, seg: int = 0) -> None:
            # 搜索到可行解
            if seg == 4 and idx == n:
                res.append('.'.join(path))
                return

            # 提前回溯
            if seg == 4 or idx == n:
                return

            # 处理前导 0 情况
            if s[idx] == '0':
                path[seg] = '0'
                backtrack(idx + 1, seg + 1)
                return

            # 一般情况
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
