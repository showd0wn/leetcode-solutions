// topics = ["双指针", "滑动窗口"]

function characterReplacement(s: string, k: number): number {
  const n = s.length;
  const num = new Array(26).fill(0);
  let maxn = 0,
    left = 0,
    right = 0;

  while (right < n) {
    const lChar = s[left];
    const rChar = s[right];
    const lIndex = lChar.charCodeAt(0) - 'A'.charCodeAt(0);
    const rIndex = rChar.charCodeAt(0) - 'A'.charCodeAt(0);

    num[rIndex] += 1;
    maxn = Math.max(maxn, num[rIndex]);
    if (right - left + 1 - maxn > k) {
      num[lIndex] -= 1;
      left += 1;
    }
    right += 1;
  }
  return right - left;
}
