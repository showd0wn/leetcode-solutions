// topics = ["二分查找"]

function shipWithinDays(weights: number[], D: number): number {
  // 判断运载能力为 w 时，能否在 D 天内运输完成
  const helper = (w: number): boolean => {
    let total = 0;
    let day = 0;
    for (const weight of weights) {
      if (total + weight > w) {
        total = weight;
        day += 1;
      } else {
        total += weight;
      }
    }
    if (total) {
      day += 1;
    }
    return day <= D;
  };

  let i = Math.max(...weights);
  let j = weights.reduce((acc, cur) => acc + cur);
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (!helper(mid)) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  return i;
}
