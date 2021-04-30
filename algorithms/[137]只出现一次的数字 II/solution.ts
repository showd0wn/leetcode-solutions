// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(n); space O(1), n 是数组的长度
 */
function singleNumber(nums: number[]): number {
  let res = 0;

  // 统计所有数字的各二进制位的和，并对 3 求余，结果则为只出现一次的数字
  for (let i = 0; i < 32; i += 1) {
    let sum = 0;
    for (const num of nums) {
      sum += (num >> i) & 1;
    }
    // res ^= sum % 3 << i 也可
    res |= sum % 3 << i;
  }

  return res;
}
