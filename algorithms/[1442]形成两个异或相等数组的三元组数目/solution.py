# topics = ["位运算"]

from typing import List


class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        """
        遍历 + 异或前缀和
        time O(n^3), space O(n), n 为 arr 长度
        """
        n = len(arr)
        res = 0

        # 计算异或前缀和，preXor[i] 表示前 i 个数的异或前缀和
        preXor = [0]

        for num in arr:
            preXor.append(preXor[-1] ^ num)

        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j, n):
                    # 易证 a == b 等价于 preXor[k + 1] == preXor[i]
                    if preXor[k + 1] == preXor[i]:
                        res += 1

        return res

    def countTriplets2(self, arr: List[int]) -> int:
        """
        遍历（优化） + 异或前缀和
        time O(n^2), space O(n), n 为 arr 长度
        """
        n = len(arr)
        res = 0

        # 计算异或前缀和，preXor[i] 表示前 i 个数的异或前缀和
        preXor = [0]

        for num in arr:
            preXor.append(preXor[-1] ^ num)

        for i in range(n):
            for k in range(i + 1, n):
                # 易证 a == b 等价于 preXor[k + 1] == preXor[i]
                if preXor[k + 1] == preXor[i]:
                    # [i + 1, k] 范围内的任意 j 都符合要求
                    res += k - i

        return res
