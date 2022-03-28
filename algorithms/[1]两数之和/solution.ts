// topics = ["数组", "哈希表"]

/**
 * Hash Table
 * time O(n), space O(n), n 为 nums 长度
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (const [idx, ele] of nums.entries()) {
    const another = target - ele;
    if (map.has(another)) {
      return [map.get(another)!, idx];
    }
    map.set(ele, idx);
  }

  return [-1, -1];
}
