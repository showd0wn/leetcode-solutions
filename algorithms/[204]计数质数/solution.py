# topics = ["数学"]


class Solution:
    def countPrimes(self, n: int) -> int:
        """
        标记筛选法
        如果 x 是质数，那么大于 x 的 x 的倍数一定不是质数
        """
        if n < 3:
            return 0

        primes = [True] * n
        primes[0] = primes[1] = False

        for i in range(2, int(n ** 0.5) + 1):
            if primes[i]:
                # 从 x * x 开放标记，因为 2x，3x，... 一定在 x 之前已经被标记过了
                primes[i * i : n : i] = [False] * len(primes[i * i : n : i])

        return sum(primes)
