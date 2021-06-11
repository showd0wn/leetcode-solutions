// topics = ["动态规划"]

/**
 * Dynamic Programming
 * time O(n * sqrt(n)), space O(n)
 */
function numSquares(n: number): number {
  const f = new Array<number>(n + 1).fill(0);
  for (let i = 1; i <= n; i += 1) {
    let minn = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j += 1) {
      minn = Math.min(minn, f[i - j * j]);
    }
    f[i] = minn + 1;
  }
  return f[n];
}
