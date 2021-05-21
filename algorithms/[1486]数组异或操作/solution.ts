// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(n), space O(1)
 */
function xorOperation(n: number, start: number): number {
  let res = 0;
  for (let i = 0; i < n; i += 1) {
    res ^= start + 2 * i;
  }

  return res;
}
