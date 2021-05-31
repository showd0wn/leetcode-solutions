// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(1), space O(1)
 */
function isPowerOfFour(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  if ((n & (n - 1)) != 0) {
    return false;
  }

  // 0xaaaaaaaa 的奇数二进制位都为 1（规定最低位为第 0 位）
  return (n & 0xaaaaaaaa) === 0;
}
