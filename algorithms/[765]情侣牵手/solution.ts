// topics = ["贪心算法"]

function minSwapsCouples(row: number[]): number {
  // 记录每个位置的情侣的位置
  const map = new Map<number, number>();
  for (let [idx, ele] of row.entries()) {
    map.set(ele ^ 1, idx); // 【技巧】异或运算 偶数 += 1; 奇数 -= 1;
  }

  let res = 0;

  // 贪心: 从前往后处理，并且每次处理都保留第 k 个位置的其中一位
  // 证明: https://leetcode-cn.com/problems/couples-holding-hands/solution/liang-chong-100-de-jie-fa-bing-cha-ji-ta-26a6/
  for (let i = 1, n = row.length; i < n; i += 2) {
    if (row[i] != (row[i - 1] ^ 1)) {
      const j = map.get(row[i - 1])!;
      [row[i], row[j]] = [row[j], row[i]];
      map.set(row[i] ^ 1, i);
      map.set(row[j] ^ 1, j);
      res += 1;
    }
  }

  return res;
}
