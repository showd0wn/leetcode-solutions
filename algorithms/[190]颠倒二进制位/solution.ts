// topics = ["位运算"]

function reverseBits(n: number): number {
  let res = 0;

  // JavaScript 中参与位运算的值会先被转为 32 位有符号整型！
  for (let i = 0; i < 32; i += 1) {
    let t = (n >> i) & 1;
    if (t) {
      res |= t << (31 - i);
    }
  }

  // 逻辑右移/无符号右移，最高位补 0
  return res >>> 0;
}
