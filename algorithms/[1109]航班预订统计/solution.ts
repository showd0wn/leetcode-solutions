// topics = ["数组", "数学"]

// 差分数组，区间两端进行操作以代替区间内操作
function corpFlightBookings(bookings: number[][], n: number): number[] {
  const res = new Array<number>(n).fill(0);

  for (const [i, j, cnt] of bookings) {
    res[i - 1] += cnt;
    if (j < n) {
      res[j] -= cnt;
    }
  }

  // 求前缀和，将差分数组转化为原数组
  for (let i = 1; i < n; i += 1) {
    res[i] += res[i - 1];
  }

  return res;
}
