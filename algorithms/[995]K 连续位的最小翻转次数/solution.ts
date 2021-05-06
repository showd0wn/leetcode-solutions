// ["贪心算法", "滑动窗口"]

/**
 * Greedy & Sliding Window
 * time O(n·K), space O(K), n 为数组长度
 */
function minKBitFlips(A: number[], K: number): number {
  const n = A.length;
  const q: number[] = [];
  let res = 0;

  for (let i = 0; i < n; i += 1) {
    if (q.length && i >= q[0] + K) {
      q.shift();
    }

    if (q.length % 2 == A[i]) {
      if (i + K > n) {
        return -1;
      }
      q.push(i);
      res += 1;
    }
  }

  return res;
}
