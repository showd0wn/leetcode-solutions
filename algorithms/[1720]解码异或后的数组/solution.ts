// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(n), space O(1), n 为 encoded 的长度, 返回值不计入空间复杂度
 */
function decode(encoded: number[], first: number): number[] {
  const res = [first];

  for (const num of encoded) {
    res.push(num ^ res[res.length - 1]);
  }

  return res;
}
