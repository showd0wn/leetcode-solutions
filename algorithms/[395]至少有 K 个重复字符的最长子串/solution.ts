// topics = ["分治算法", "递归"]

function longestSubstring(s: string, k: number): number {
  const n = s.length;
  const cnt = new Map<string, number>();
  for (const ch of s) {
    cnt.set(ch, (cnt.get(ch) ?? 0) + 1);
  }

  let minTimes = Number.MAX_SAFE_INTEGER;
  let maxTimes = 0;
  for (const times of cnt.values()) {
    minTimes = Math.min(minTimes, times);
    maxTimes = Math.max(maxTimes, times);
  }

  if (minTimes >= k) {
    return n;
  }
  if (maxTimes < k) {
    return 0;
  }

  let res = 0;
  let idx = 0;
  for (let i = 0; i < n; i += 1) {
    const ch = s[i];
    if (cnt.get(ch)! < k) {
      res = Math.max(res, longestSubstring(s.slice(idx, i), k));
      idx = i + 1;
    }
  }

  return Math.max(res, longestSubstring(s.slice(idx, n), k));
}
