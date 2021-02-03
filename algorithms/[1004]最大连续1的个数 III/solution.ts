function longestOnes(A: number[], K: number): number {
  // 同 424
  const n = A.length;
  let count = 0, left = 0, right = 0;

  while (right < n) {
    if (A[right] == 1) {
      count += 1
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
};