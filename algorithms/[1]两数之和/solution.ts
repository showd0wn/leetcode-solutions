// topics = ["数组", "哈希表"]

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (const [idx, ele] of nums.entries()) {
    const another = target - ele;
    if (!map.has(another)) {
      map.set(ele, idx);
    }
    return [map.get(another)!, idx];
  }

  return [-1, -1];
}
