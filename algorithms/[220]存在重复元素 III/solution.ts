// topics = ["桶排序"]

// 参考 https://leetcode-cn.com/problems/contains-duplicate-iii/solution/cun-zai-zhong-fu-yuan-su-iii-by-leetcode-bbkt/
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  // 用哈希表实现桶，桶中只会有一个元素
  const map = new Map<number, number>();

  for (let i = 0, n = nums.length; i < n; i += 1) {
    const x = nums[i];
    const id = getID(x, t + 1);
    if (map.has(id)) {
      return true;
    }
    if (map.has(id - 1) && Math.abs(x - map.get(id - 1)!) <= t) {
      return true;
    }
    if (map.has(id + 1) && Math.abs(x - map.get(id + 1)!) <= t) {
      return true;
    }
    map.set(id, x);
    if (i >= k) {
      map.delete(getID(nums[i - k], t + 1));
    }
  }
  return false;
}

// x 表示投入桶中的元素，w 表示桶的容量，函数返回桶的 ID
const getID = (x: number, w: number): number => {
  return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
};
