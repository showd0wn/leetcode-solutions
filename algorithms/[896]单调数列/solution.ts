// topics = ["数组"]

/**
 * Iterate
 * time O(n), space O(1), n 为数组长度
 */
function isMonotonic(A: number[]): boolean {
  const n = A.length;
  let inc = true;
  let dec = true;

  for (let i = 0; i < n - 1; i += 1) {
    if (A[i] > A[i + 1]) {
      inc = false;
    }
    if (A[i] < A[i + 1]) {
      dec = false;
    }
  }

  return inc || dec;
}
