from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        n = len(gas)

        # 模拟从各个加油站出发的情况 time O(n^2)
        for i in range(n):
            if gas[i] >= cost[i]:
                left = 0
                flag = True
                for j in range(i, i + n):
                    left += gas[j % n] - cost[j % n]
                    if left < 0:
                        flag = False
                        break
                if flag:
                    return i

        return -1
