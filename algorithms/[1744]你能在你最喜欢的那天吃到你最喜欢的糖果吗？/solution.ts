// topics = ["数组"]

/**
 * 前缀和
 * time O(n + q), space(n), n 和 q 分别为 candiesCount 和 queries 长度
 */
function canEat(candiesCount: number[], queries: number[][]): boolean[] {
  const preSum: number[] = [0];
  for (const count of candiesCount) {
    preSum.push(preSum[preSum.length - 1] + count);
  }

  return queries.map(([t, d, c]) => {
    const min = 1 * (d + 1);
    const max = c * (d + 1);
    return !(min > preSum[t + 1] || max < preSum[t] + 1);
  });
}
