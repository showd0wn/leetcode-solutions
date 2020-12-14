/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
  const len = gas.length;

  for (let i = 0; i < len; i += 1) {
    let [gasSum, costSum] = [0, 0];
    let flag = true;
    let next = i;
    do {
      gasSum += gas[next];
      costSum += cost[next];
      if (gasSum < costSum) {
        flag = false;
        break;
      }
      next = next === len - 1 ? 0 : next + 1;
    }
    while (next !== i);

    if (flag) {
      return i;
    }
  }

  return -1;
};
