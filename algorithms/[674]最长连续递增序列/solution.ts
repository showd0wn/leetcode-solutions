// topics = ["数组"]

function findLengthOfLCIS(nums: number[]): number {
  const len = nums.length;

  if (len === 0 || len === 1) {
    return len;
  }

  let res = 0;
  // 记录当前连续递增序列起始索引
  let start = 0;
  for (let i = 1; i < len; i += 1) {
    if (nums[i] <= nums[i - 1]) {
      res = Math.max(res, i - start);
      start = i;
    }
  }

  return Math.max(res, len - start);
}
