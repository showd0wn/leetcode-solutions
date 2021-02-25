// topics = ["动态规划"]

function climbStairs(n: number): number {
  // 滚动数组思想优化空间复杂度
  let p = 0;
  let q = 0;
  let r = 1;

  for (let i = 1; i < n + 1; i += 1) {
    p = q;
    q = r;
    r = p + q;
  }

  return r;
}
