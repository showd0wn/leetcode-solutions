// topics = ["数学"]

function isPrime(n: number): boolean {
  // 减少枚举范围，只需枚举 2 ~ x ** 0.5
  for (let i = 2; i ** 2 < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(n: number): number {
  let res = 0;
  for (let i = 2; i < n; i += 1) {
    if (isPrime(i)) {
      res += 1;
    }
  }
  return res;
}
