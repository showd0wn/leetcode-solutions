// topics = ["数组", "哈希表"]

function findShortestSubArray(nums: number[]): number {
  const map = new Map<number, number[]>();
  for (let [key, val] of nums.entries()) {
    if (map.has(val)) {
      map.get(val)?.push(key);
    } else {
      map.set(val, [key]);
    }
  }

  const values = [...map.values()];
  const degree = Math.max(...values.map((arr) => arr.length));
  const filtered = values.filter((item) => item.length == degree);

  return Math.min(...filtered.map((item) => item[degree - 1] - item[0] + 1));
}
