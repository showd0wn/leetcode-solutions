/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  // 按会议结束时间升序排序
  events.sort((a, b) => a[1] - b[1]);

  // 提前判断是否有全部可以参加会议的情况
  let flag = true;
  for (let i = 1; i < events.length; i += 1) {
    if (events[i][1] == events[i - 1][1]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    return events.length;
  }

  // 贪心
  const set = new Set();
  for (let event of events) {
    for (let i = event[0]; i <= event[1]; i += 1) {
      if (!set.has(i)) {
        set.add(i)
        break;
      }
    }
  }

  return set.size;
};
