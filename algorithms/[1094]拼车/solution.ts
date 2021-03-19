// topics = ["数组"]

// 同 1109.航班预订统计。差分统计。
function carPooling(trips: number[][], capacity: number): boolean {
  const n = Math.max(...trips.map(item => item[2]));
  const arr = new Array<number>(n + 1).fill(0);

  for (const [cnt, start, end] of trips) {
    arr[start] += cnt;
    if (end < n) {
      arr[end] -= cnt;
    }
  }

  for (let i = 1; i <= n; i += 1) {
    arr[i] += arr[i - 1];
  }

  return capacity >= Math.max(...arr);
}
