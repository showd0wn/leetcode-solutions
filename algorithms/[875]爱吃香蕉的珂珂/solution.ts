// topics = ["二分查找"]

function minEatingSpeed(piles: number[], h: number): number {
  let i = 1;
  let j = Math.max(...piles);

  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    const hour = piles.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0);

    if (hour > h) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  return i;
}
