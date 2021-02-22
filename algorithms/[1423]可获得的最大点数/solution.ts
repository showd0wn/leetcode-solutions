// topics = ["数组"]

function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length;
  // 枚举所有可能的组合，初始选取下标 0 ~ k - 1
  const stack = cardPoints.slice(0, k);
  let sum = stack.reduce((a, b) => a + b, 0);
  let res = sum;

  let i = n - 1;
  while (stack.length) {
    sum += cardPoints[i] - stack.pop()!;
    res = Math.max(res, sum);
    i -= 1;
  }

  return res;
}
