// topics = ["滑动窗口", "哈希表"]

function subarraysWithKDistinct(A: number[], K: number): number {
  const n = A.length;

  const atMostK = (x: number): number => {
    let i = 0;
    let j = 0;
    let res = 0;

    const map = new Map<number, number>();

    while (j < n) {
      if (map.has(A[j])) {
        map.set(A[j], map.get(A[j])! + 1);
      } else {
        map.set(A[j], 1);
      }

      while (map.size > x) {
        map.set(A[i], map.get(A[i])! - 1);
        if (map.get(A[i]) == 0) {
          map.delete(A[i]);
        }
        i += 1;
      }

      j += 1;
      res += j - i;
    }

    return res;
  };

  // 恰好包含 K 种不同整数 = 最多包含 k 种不同整数 - 最多包含 k - 1 种不同整数
  return atMostK(K) - atMostK(K - 1);
}
