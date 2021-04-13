// topics = ["贪心算法"]

function eraseOverlapIntervals(intervals: number[][]): number {
  // 先按左端点从小到大，再按右端点从小到大
  intervals.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let res = 0;
  let pre = intervals[0];

  for (let i = 1, n = intervals.length; i < n; i += 1) {
    const cur = intervals[i];
    // 判断上个区间和当前区间的位置关系
    if (cur[0] >= pre[1]) {
      pre = intervals[i];
    } else if (cur[1] <= pre[1]) {
      pre = intervals[i];
      res += 1;
    } else {
      res += 1;
    }
  }

  return res;
}
