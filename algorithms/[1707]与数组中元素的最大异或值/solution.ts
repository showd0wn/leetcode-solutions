// topics = ["位运算"]

/**
 * 暴力（TLE）
 * time O(n * q), space O(1), n 和 q 分别为 nums 和 queries 长度
 */
function maximizeXor(nums: number[], queries: number[][]): number[] {
  nums.sort((a, b) => a - b);
  const res: number[] = [];

  for (const [x, m] of queries) {
    let max = -1;
    for (const num of nums) {
      if (num > m) break;
      max = Math.max(max, x ^ num);
    }
    res.push(max);
  }

  return res;
}
