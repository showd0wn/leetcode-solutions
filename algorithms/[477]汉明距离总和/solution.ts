// topics = ["位运算"]

/**
 * Bit Manipulation
 * time O(n * L), space O(1), n 为数组长度, L = 30
 */
function totalHammingDistance(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  // 数据范围为 0 ~ 10^9, 10^9 < 2^30
  for (let i = 0; i < 30; i += 1) {
    let c = 0;
    for (const val of nums) {
      // 累加第 i 位的值
      c += (val >> i) & 1;
    }
    // 所以元素的第 i 位共有 c 个 1， n - c 个 0
    // 这些元素在二进制的第 i 位上的汉明距离之和为 c * (n - c)
    ans += c * (n - c);
  }

  return ans;
}
