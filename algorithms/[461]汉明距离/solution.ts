// topics = ["位运算"]

/**
 * Brian Kernighan 算法
 * time O(logC), space O(1), C 为数据范围, 本题中 C = 2 ^ 31, 即 logC = 31
 * 近似题 191.位1的个数
 */
function hammingDistance(x: number, y: number): number {
  let n = x ^ y;
  let res = 0;

  while (n) {
    n &= n - 1;
    res += 1;
  }

  return res;
}
