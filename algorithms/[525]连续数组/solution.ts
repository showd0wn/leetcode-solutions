// topics = ["数组", "哈希表"]

/**
 * 前缀和 & 哈希表
 * time O(n), space O(n), n 为数组长度
 */
function findMaxLength(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, -1);

  let preSum = 0;
  let res = 0;

  for (const [i, num] of nums.entries()) {
    preSum += num === 1 ? 1 : -1;
    if (map.has(preSum)) {
      res = Math.max(res, i - map.get(preSum)!);
    } else {
      map.set(preSum, i);
    }
  }

  return res;
}
