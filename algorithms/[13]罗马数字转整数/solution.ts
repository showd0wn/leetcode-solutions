// topics = ["数学"]

/**
 * 模拟
 * time O(n), space O(1), n 为 s 长度
 */
function romanToInt(s: string): number {
  const n = s.length;
  const d = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  type Roman = keyof typeof d;

  let res = 0;
  for (let i = 0; i < n; i += 1) {
    const ch = s[i] as Roman;
    const value = d[ch];

    if (i < n - 1 && value < d[s[i + 1] as Roman]) {
      res -= value;
    } else {
      res += value;
    }
  }

  return res;
}
