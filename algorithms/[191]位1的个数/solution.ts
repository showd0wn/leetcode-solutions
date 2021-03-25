// topics = ["位运算"]

function hammingWeight(n: number): number {
  let res = 0;
  while (n) {
    n &= n - 1;
    res += 1;
  }
  return res;
}
