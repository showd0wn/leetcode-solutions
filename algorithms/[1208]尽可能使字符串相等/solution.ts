// topics = ["数组", "滑动窗口"]

/**
 * Sliding Window
 * time O(n), space O(n), n 为字符串长度
 */
function equalSubstring(s: string, t: string, maxCost: number): number {
  const n = s.length;
  const record: number[] = [];
  for (let i = 0; i < n; i += 1) {
    record[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  }

  let i = 0;
  let j = 0;
  let total = 0;
  let res = 0;

  while (j < n) {
    total += record[j];

    while (total > maxCost) {
      res = Math.max(res, j - i);
      total -= record[i];
      i += 1;
    }

    j += 1;
  }

  return Math.max(res, j - i);
}
