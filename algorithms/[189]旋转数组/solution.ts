// topics = ["数组"]

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  function reserve(start: number, end: number): void {
    let i = start;
    let j = end;

    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
      j -= 1;
    }
  }

  const n = nums.length;
  const m = k % n;

  // 原地翻转 3 次
  reserve(0, n - m - 1);
  reserve(n - m, n - 1);
  reserve(0, n - 1);
}
