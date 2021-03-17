// topics = ["位运算"]

// 此题要求 time O(n); space O(1)。故使用位运算。
function singleNumber(nums: number[]): number {
  let res = 0;

  // 统计所有数字的各二进制位中 1 的出现次数，并对 3 求余，结果则为只出现一次的数字
  for (let i = 0; i < 32; i += 1) {
    let sum = 0;
    for (let num of nums) {
      // 与运算性质：x & 1 = x
      sum += (num >> i) & 1;
    }
    // 异或运算性质：x ^ 0 = x；x ^ 1 = ~x
    res ^= sum % 3 << i;
  }

  return res;
}
