// topics = ["哈希表"]

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (const [i, v] of nums.entries()) {
    if (map.has(v) && i - map.get(v)! <= k) {
      return true;
    }
    map.set(v, i);
  }

  return false;
}
