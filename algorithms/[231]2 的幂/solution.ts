// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(1), space O(1)
 */
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  return (n & -n) === n;
}
