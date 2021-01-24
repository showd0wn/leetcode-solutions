function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  for (const ele of nums1) {
    if (map.has(ele)) {
      map.set(ele, map.get(ele)! + 1);
    } else {
      map.set(ele, 1);
    }
  }
  const res: number[] = [];
  for (const ele of nums2) {
    if (map.has(ele)) {
      const counts = map.get(ele);
      if (counts === 1) {
        map.delete(ele);
      } else {
        map.set(ele, map.get(ele)! - 1);
      }
      res.push(ele);
    }
  }
  return res;
};
