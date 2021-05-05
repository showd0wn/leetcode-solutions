// topics = ["递归"]

/**
 * 递归 + 空间优化
 * time O(n), space O(1)
 */
function tribonacci(n: number): number {
  if (n == 0) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }

  let r = 0;
  let s = 1;
  let t = 1;
  for (let i = 3; i <= n; i += 1) {
    [r, s, t] = [s, t, r + s + t];
  }
  return t;
}
