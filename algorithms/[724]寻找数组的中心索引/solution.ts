// topics = ["数组"]

function pivotIndex(nums: number[]): number {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;

  for (let [idx, ele] of nums.entries()) {
    if (sum * 2 + ele === total) {
      return idx;
    }
    sum += ele;
  }

  return -1;
}
