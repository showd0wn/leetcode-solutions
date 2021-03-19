// topics = ["贪心算法"]

// time O(n)
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let curSum = 0;
  let total = 0;
  // 出发的加油站编号
  let start = 0;

  for (let i = 0, n = gas.length; i < n; i += 1) {
    total += gas[i] - cost[i];
    curSum += gas[i] - cost[i];
    if (curSum < 0) {
      start = i + 1;
      curSum = 0;
    }
  }

  return total < 0 ? -1 : start;
}
