// topics = ["数组", "双指针"]

/**
 * 排序 + 双指针
 * time O(n^2) space O(logn), n 为 nums 长度
 */
function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  if (n < 3) return [];

  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i += 1) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let L = i + 1;
    let R = n - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum < 0) {
        L += 1;
      } else if (sum > 0) {
        R -= 1;
      } else {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L += 1;
        while (L < R && nums[R] == nums[R - 1]) R -= 1;
        L += 1;
        R -= 1;
      }
    }
  }

  return res;
}
