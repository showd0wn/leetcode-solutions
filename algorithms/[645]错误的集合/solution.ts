// topics = ["哈希表"]

function findErrorNums(nums: number[]): number[] {
  const map = new Map<number, number>();
  const n = nums.length;

  for (let i = 1; i <= n; i += 1) {
    map.set(i, 0);
  }

  for (const num of nums) {
    map.set(num, map.get(num)! + 1);
  }

  let x = 0;
  let y = 0;
  for (const [num, cnt] of map.entries()) {
    if (cnt == 2) {
      x = num;
    } else if (cnt == 0) {
      y = num;
    }
  }

  return [x, y];
}
