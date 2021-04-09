// topics = ["数学", "动态规划"]

function nthUglyNumber(n: number): number {
  const dp: number[] = [1];
  let [i2, i3, i5] = [0, 0, 0];

  for (let i = 1; i < n; i += 1) {
    const v2 = 2 * dp[i2];
    const v3 = 3 * dp[i3];
    const v5 = 5 * dp[i5];
    const v = Math.min(v2, v3, v5);
    dp[i] = v;

    if (v2 == v) {
      i2 += 1;
    }
    if (v3 == v) {
      i3 += 1;
    }
    if (v5 == v) {
      i5 += 1;
    }
  }

  return dp[n - 1];
}
