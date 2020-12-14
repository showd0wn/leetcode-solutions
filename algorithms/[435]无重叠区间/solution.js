/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return [];
  const len = intervals.length;

  // 动态规划
  // dp[i] 表示到第i个区间为止，最大可能区间数
  const dp = new Array(len).fill(1);

  // 按区间起点升序排序
  intervals.sort((a,b) => a[0] - b[0]);

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (intervals[j][1] <= intervals[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return len - Math.max(...dp);
};


const eraseOverlapIntervals2 = function(intervals) {
  if (!intervals.length) return [];
  const len = intervals.length;
  
  // 按区间终点升序排序
  intervals.sort((a, b) => a[1] - b[1]);
  
  let count = 1;
  let lastEnd = intervals[0][1];

  // 贪心
  for (let i = 1; i < len; i += 1) {
    if (intervals[i][0] >= lastEnd) {
      count += 1;
      lastEnd = intervals[i][1];
    }
  }

  return len - count;
};
