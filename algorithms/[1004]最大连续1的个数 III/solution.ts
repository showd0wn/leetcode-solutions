// topics = ["双指针", "滑动窗口"]

/**
 * 同 424.替换后的最长重复字符
 * Sliding Window
 * time O(n), space O(1), n 为数组长度
 */
function longestOnes(A: number[], K: number): number {
  const n = A.length;
  let count = 0,
    left = 0,
    right = 0;

  while (right < n) {
    if (A[right] == 1) {
      count += 1;
    }
    if (right - left + 1 - count > K) {
      if (A[left] == 1) {
        count -= 1;
      }
      left += 1;
    }
    right += 1;
  }

  return right - left;
}
