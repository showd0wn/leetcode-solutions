// topics = ["字符串", "双指针"]

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; left += 1, right += 1) {
    [s[left], s[right]] = [s[right], s[left]];
  }
}
