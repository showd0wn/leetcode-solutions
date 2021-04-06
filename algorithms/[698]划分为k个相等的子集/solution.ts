// topics = ["回溯算法"]

function canPartitionKSubsets(nums: number[], k: number): boolean {
  const n = nums.length;
  const total = nums.reduce((acc, cur) => acc + cur, 0);

  if (total % k != 0) {
    return false;
  }

  const target = total / k;
  const used = new Set<number>();

  const backtrack = (s: number = k, idx: number = 0, acc: number = 0): boolean => {
    if (s == 0) {
      return true;
    }
    if (acc == target) {
      return backtrack(s - 1, 0, 0);
    }
    for (let i = idx; i < n; i += 1) {
      if (!used.has(i) && acc + nums[i] <= target) {
        used.add(i);
        if (backtrack(s, i + 1, acc + nums[i])) {
          return true;
        }
        used.delete(i);
      }
    }
    return false;
  };

  return backtrack();
}
