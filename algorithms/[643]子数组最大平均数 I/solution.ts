// topics = ["数组", "滑动窗口"]

function findMaxAverage(nums: number[], k: number): number {
  const n = nums.length;

  let total = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxTotal = total;

  for (let i = k; i < n; i += 1) {
    total = total + nums[i] - nums[i - k];
    maxTotal = Math.max(maxTotal, total);
  }

  return maxTotal / k;
}
