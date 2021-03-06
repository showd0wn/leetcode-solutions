# topics = ["分治算法"]


class Solution:
    def myPow(self, x: float, n: int) -> float:
        def quickMul(N: int) -> float:
            if N == 0:
                return 1.0
            y = quickMul(N // 2)
            return y * y if N % 2 == 0 else y * y * x

        # 当指数 n 为负数时，计算 x 的 -n 次方再取倒数
        return quickMul(n) if n >= 0 else 1.0 / quickMul(-n)
