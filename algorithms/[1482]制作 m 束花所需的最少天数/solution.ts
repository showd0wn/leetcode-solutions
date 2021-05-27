// topics = ["数组", "二分查找"]

/**
 * Binary Search
 * time O(nlog(high - low)), space O(1), n 为 bloomDay 的长度, high 和 low 分别为其中最大、最小值
 */
function minDays(bloomDay: number[], m: number, k: number): number {
  if (m * k > bloomDay.length) {
    return -1;
  }
  let low = Math.min.apply(null, bloomDay);
  let high = Math.max.apply(null, bloomDay);
  while (low < high) {
    const days = Math.floor((high - low) / 2) + low;
    if (canMake(bloomDay, days, m, k)) {
      high = days;
    } else {
      low = days + 1;
    }
  }
  return low;
}

const canMake = (bloomDay: number[], days: number, m: number, k: number) => {
  // 已制作的花束数量
  let bouquets = 0;
  // 连续盛开的花的数量
  let flowers = 0;
  for (let i = 0, n = bloomDay.length; i < n && bouquets < m; i += 1) {
    if (bloomDay[i] <= days) {
      flowers += 1;
      if (flowers == k) {
        bouquets += 1;
        flowers = 0;
      }
    } else {
      flowers = 0;
    }
  }
  return bouquets >= m;
};
