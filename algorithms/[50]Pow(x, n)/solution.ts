// topics = ["分治算法"]

function myPow(x: number, n: number): number {
  const quickMul = (N: number): number => {
    if (N == 0) {
      return 1;
    }
    const y = quickMul(Math.floor(N / 2));

    if (N % 2 == 0) {
      return y * y;
    }
    return y * y * x;
  };

  if (n >= 0) {
    return quickMul(n);
  }
  return 1 / quickMul(-n);
}
