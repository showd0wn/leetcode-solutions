// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(n), space O(1), n 为原始数组 perm 的长度
 */
function decode(encoded: number[]): number[] {
  const n = encoded.length + 1;

  // 原始数组所有元素的异或结果
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total ^= i;
  }

  // 原始数组除第一个元素外，其它所有元素的异或结果(n 为奇数！)
  let others = 0;
  for (let i = 1; i < n; i += 2) {
    others ^= encoded[i];
  }

  const res = [total ^ others];
  for (const v of encoded) {
    res.push(res[res.length - 1] ^ v);
  }

  return res;
}
