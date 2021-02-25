// topics = ["数组"]

function plusOne(digits: number[]): number[] {
  // 不改变原数组
  const res: number[] = [];

  let n = digits.length;
  let carry = 1;

  while (--n >= 0) {
    const val = digits[n] + carry;
    res.unshift(val % 10);
    carry = Math.floor(val / 10);
  }

  if (carry === 1) {
    res.unshift(carry);
  }

  return res;
}
