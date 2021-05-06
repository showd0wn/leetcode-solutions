// topics = ["贪心算法"]

function maxEvents(events: number[][]): number {
  // Greedy

  /**
   * 解法一
   * 1. 会议按结束时间升序排序
   * 2. 优先参加早结束的会议，参加每个会议时，使用较早的天来参加
   * time O(T·n), space O(T), T 为时间点的上界, n 为会议数量
   */
  events.sort((a, b) => a[1] - b[1]);

  // 提前判断是否可以参加全部会议
  let flag = true;
  for (let i = 1; i < events.length; i += 1) {
    if (events[i][1] === events[i - 1][1]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return events.length;
  }

  const set = new Set<number>();
  for (const [start, end] of events) {
    for (let i = start; i <= end; i += 1) {
      if (!set.has(i)) {
        set.add(i);
        break;
      }
    }
  }
  return set.size;

  /**
   * 解法二
   * 1. 会议按开始时间升序排序
   * 2. 每一天:
   *    1) 将今天开始的会议加入队列（只需加结束时间），
   *    2) 清楚过期的会议
   *    3) 队列中的会议（按结束时间）升序排序
   *    4) 如果队列不为空，今天参加第一个
   * 3. 直至处理完所有会议
   * time O(n^2logn), space O(n), n 为会议数量
   */
  events.sort((a, b) => a[0] - b[0]);
  let res = 0;
  let day = 0;
  const queue: number[] = [];
  while (events.length || queue.length) {
    day += 1;

    while (events.length && events[0][0] === day) {
      queue.push(events.shift()![1]);
    }

    while (queue.length && queue[0] < day) {
      queue.shift();
    }

    queue.sort((a, b) => a - b);

    if (queue.length) {
      queue.shift();
      res += 1;
    }
  }
  return res;
}
