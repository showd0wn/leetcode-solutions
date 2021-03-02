// topics = ["递归"]

function tribonacci(n: number): number {
  if (n == 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }

  // 空间优化
  let r = 0;
  let s = 1;
  let t = 1;
  for (let i = 3; i <= n; i += 1) {
    [r, s, t] = [s, t, r + s + t];
  }
  return t;
}
