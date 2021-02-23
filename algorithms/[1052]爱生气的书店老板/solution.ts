// topics = ["数组", "滑动窗口"]

function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  const n = customers.length;

  let total = 0;
  for (let i = 0; i < n; i += 1) {
    if (grumpy[i] == 0) {
      total += customers[i];
    }
  }

  let increase = 0;
  for (let i = 0; i < X; i += 1) {
    increase += customers[i] * grumpy[i];
  }

  let maxIncrease = increase;
  for (let j = X; j < n; j += 1) {
    increase = increase - customers[j - X] * grumpy[j - X] + customers[j] * grumpy[j];
    maxIncrease = Math.max(maxIncrease, increase);
  }

  return total + maxIncrease;
}
