// topics = ["动态规划", "位运算"]

function countBits(num: number): number[] {
  const bits = new Array<number>(num + 1).fill(0);
  for (let i = 1; i <= num; i += 1) {
    // bits[x] 的值等于 bits[x/2] 的值加上 x 除以 2 的余数（即偶数不变，奇数加 1）
    bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
}
