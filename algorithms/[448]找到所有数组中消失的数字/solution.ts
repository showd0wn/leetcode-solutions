// topics = ["数组"]

function findDisappearedNumbers(nums: number[]): number[] {
  const res = Array.from({ length: nums.length }, (_, i) => i + 1);

  for (const num of nums) {
    res[num - 1] = 0;
  }

  return res.filter((i) => i != 0);
}
