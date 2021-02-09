# topics = ["数学"]

from typing import List


class Solution:
    def addToArrayForm(self, A: List[int], K: int) -> List[int]:
        KL = [int(n) for n in str(K)]

        res = []
        i, j, carry = len(A) - 1, len(KL) - 1, 0

        # 逐位相加
        while i >= 0 and j >= 0:
            sum = A[i] + KL[j] + carry
            res.append(sum % 10)
            carry = sum // 10
            i -= 1
            j -= 1
        while i >= 0:
            sum = A[i] + carry
            res.append(sum % 10)
            carry = sum // 10
            i -= 1
        while j >= 0:
            sum = KL[j] + carry
            res.append(sum % 10)
            carry = sum // 10
            j -= 1

        if carry:
            res.append(1)

        return res[::-1]
