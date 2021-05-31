// topics = ["位运算"]

/**
 * Bit Manipulation & Hash Table
 * time O(n), space O(n), n 为 arr 长度
 */
function countTriplets(arr: number[]): number {
  const n = arr.length;
  const s = [0];
  for (const num of arr) {
    s.push(s[s.length - 1] ^ num);
  }

  // 哈希表，空间换时间
  const cnt = new Map<number, number>();
  const total = new Map<number, number>();

  let res = 0;
  for (let k = 0; k < n; k += 1) {
    if (cnt.has(s[k + 1])) {
      // 参考 https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solution/xing-cheng-liang-ge-yi-huo-xiang-deng-sh-jud0/
      res += cnt.get(s[k + 1])! * k - total.get(s[k + 1])!;
    }

    // 统计 S[k] 的出现次数
    cnt.set(s[k], (cnt.get(s[k]) ?? 0) + 1);

    // 统计值为 S[k] 的下标之和
    total.set(s[k], (total.get(s[k]) ?? 0) + k);
  }

  return res;
}
