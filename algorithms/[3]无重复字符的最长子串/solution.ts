// topics = ["字符串", "哈希表", "滑动窗口"]

function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  const set = new Set<string>();
  let res = 0;

  let i = 0;
  let j = 0;

  while (j < n) {
    while (set.has(s[j])) {
      set.delete(s[i]);
      i += 1;
    }
    set.add(s[j]);
    j += 1;
    res = Math.max(res, j - i);
  }

  return res;
}
