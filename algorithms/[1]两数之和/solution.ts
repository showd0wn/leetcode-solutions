function twoSum(nums: number[], target: number): number[] {
  // 用 map 记录每个位置的索引-值
  const map = new Map<number, number>();

  for (const [idx, ele] of nums.entries()) {
    const another = target - ele;
    if (!map.has(another)) {
      map.set(ele, idx);
    }
    return [map.get(another)!, idx];
  }

  return [-1, -1];
};
