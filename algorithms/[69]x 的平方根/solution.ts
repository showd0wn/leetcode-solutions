// topics = ["数学", "二分查找"]

function mySqrt(x: number): number {
  let left = 0;
  let right = x + 1;

  // 左闭右开写法
  while (left < right) {
    // 这里 mid 的值可能会超过 2^31 - 1， 若使用右移运算符（>>）会有 bug，使用无符号右移代替（>>>）
    const mid = Math.floor((left + right) / 2);
    const square = mid ** 2;

    if (square == x) {
      return mid;
    }

    if (square < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
}
