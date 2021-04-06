# topics = ["回溯算法"]

from typing import List, Set


class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        total = sum(nums)

        if total % k != 0:
            return False

        target = total // k
        # 保存使用过的索引
        used: Set[int] = set()

        def backtrack(s: int = k, idx: int = 0, acc: int = 0) -> bool:
            # k 个集合都构建完
            if s == 0:
                return True
            # 构建下一个集合
            if acc == target:
                return backtrack(s - 1, 0, 0)
            for i in range(idx, n):
                if i not in used and (cur := acc + nums[i]) <= target:
                    used.add(i)
                    if backtrack(s, i + 1, cur):
                        return True
                    used.remove(i)

            return False

        return backtrack()
