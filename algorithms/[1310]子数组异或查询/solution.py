# topics = ["位运算", "数组"]

from typing import List


class Solution:
    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:
        """
        位运算 & 前缀异或
        time O(n + m), space O(n), n 和 m 分别为 arr 和 queries 的长度
        """
        preXor = [0]

        for num in arr:
            preXor.append(preXor[-1] ^ num)

        return [preXor[i] ^ preXor[j + 1] for i, j in queries]
