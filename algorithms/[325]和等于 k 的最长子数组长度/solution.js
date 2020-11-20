/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubArrayLen = function(nums, k) {
  const len = nums.length;
  const map = new Map();
  map.set(0, 0);
  let res = 0;

  // 前缀和
  let preSum = 0;
  for (let i = 0; i < len; i += 1) {
    preSum += nums[i];
    if (!map.has(preSum)) {
      map.set(preSum, i + 1);
    }
    if (map.has(preSum - k)) {
      res = Math.max(res, i - map.get(preSum - k) + 1);
    }
  }

  return res;
};
