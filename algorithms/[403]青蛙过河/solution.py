# topics = ["动态规划"]

from typing import Dict, List


class Solution:
    def canCross(self, stones: List[int]) -> bool:
        """
        回溯算法（TLE）
        time O(3^n), n 为 stones 的长度
        """
        if stones[1] != 1:
            return False

        s = set(stones)
        # 记录跳跃的单元格
        path = [0, 1]

        def backtrack() -> bool:
            if path[-1] == stones[-1]:
                return True

            cur, pre = path[-1], path[-2]
            k = cur - pre
            for step in [k + 1, k, k - 1]:
                if step > 0 and cur + step in s:
                    path.append(cur + step)
                    if backtrack():
                        return True
                    path.pop()

            return False

        return backtrack()

    def canCross2(self, stones: List[int]) -> bool:
        """
        深度优先搜索 + 记忆化
        time O(n^2), space O(n^2), n 为 stones 的长度
        """
        n = len(stones)
        d = {v: i for i, v in enumerate(stones)}

        # 记录搜索过的状态
        memo: List[Dict[int, bool]] = [{} for _ in range(n)]

        def dfs(cur: int = 0, pre: int = 0) -> bool:
            if cur == n - 1:
                return True
            if pre in memo[cur]:
                return memo[cur][pre]
            k = stones[cur] - stones[pre]
            for step in [k + 1, k, k - 1]:
                if (
                    step > 0
                    and stones[cur] + step in d
                    and dfs(d[stones[cur] + step], cur)
                ):
                    memo[cur].setdefault(pre, True)
                    return True

            memo[cur].setdefault(pre, False)
            return False

        return dfs()
