// topics = ["数组", "滑动窗口"]

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }
  const n = nums.length;
  let res = 0;
  let prod = 1;
  let i = 0;
  let j = 0;

  while (j < n) {
    prod *= nums[j];
    while (prod >= k) {
      prod /= nums[i];
      i += 1;
    }
    res += j - i + 1;
    j += 1;
  }

  return res;
}
