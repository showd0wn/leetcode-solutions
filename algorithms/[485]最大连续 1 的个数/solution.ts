// topics = ["数组"]

function findMaxConsecutiveOnes(nums: number[]): number {
  const n = nums.length;
  let i = 0;
  let j = 0;
  let res = 0;

  while (j < n) {
    if (nums[j] == 0) {
      res = Math.max(res, j - i);
      i = j + 1;
    }
    j += 1;
  }

  return Math.max(res, j - i);
}
