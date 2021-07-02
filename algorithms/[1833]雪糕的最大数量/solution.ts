// topics = ["贪心算法"]

/**
 * 排序（贪心）
 * time O(n + C), space O(C), n 为 const是长度, C = 10^5
 */
function maxIceCream(costs: number[], coins: number): number {
  // 最贵雪糕的价格
  const maxV = 10 ** 5;
  // freq[i] 价格为 i 的雪糕的个数
  const freq = new Array(maxV + 1).fill(0);

  for (const c of costs) {
    freq[c] += 1;
  }

  let count = 0;
  for (let i = 1; i < maxV + 1; i += 1) {
    if (coins < i) break;
    const curCount = Math.min(freq[i], Math.floor(coins / i));
    coins -= i * curCount;
    count += curCount;
  }

  return count;
}
