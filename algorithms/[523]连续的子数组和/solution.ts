// topics = ["数组", "哈希表"]

/**
 * 前缀和 & 哈希表
 * time O(n), space O(min(n, k)), n 为数组长度
 */
function checkSubarraySum(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  map.set(0, -1);

  let preSum = 0;

  for (const [i, num] of nums.entries()) {
    preSum += num;
    if (map.has(preSum % k)) {
      if (i - map.get(preSum % k)! > 1) {
        return true;
      }
    } else {
      map.set(preSum % k, i);
    }
  }

  return false;
}
