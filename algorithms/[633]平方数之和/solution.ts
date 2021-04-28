// topics = ["数学"]

/**
 * sqrt 函数
 * time O(sqrt(c)), space O(1)
 */
function judgeSquareSum(c: number): boolean {
  for (let a = 0; a * a <= c; a += 1) {
    // sqrt 函数判断一个数是否是平方数
    const b = Math.sqrt(c - a * a);
    if (b == parseInt(b + '')) {
      return true;
    }
  }
  return false;
}

/**
 * 双指针
 * time O(sqrt(c)), space O(1)
 */
function judgeSquareSum2(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    } else if (sum > c) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return false;
}
