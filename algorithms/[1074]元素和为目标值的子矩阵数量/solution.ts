// topics = ["数组", "哈希表"]

/**
 * 前缀和 & 哈希表
 * time O(m^2 * n), space O(n)
 */
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  let res = 0;

  // 给定整数数组 nums 和整数 k, 求 nums 中和为 target 的子数组个数
  const helper = (nums: number[], k: number): number => {
    const map = new Map<number, number>();
    map.set(0, 1);

    let pre = 0;
    let count = 0;

    for (const x of nums) {
      pre += x;
      if (map.has(pre - k)) {
        count += map.get(pre - k)!;
      }
      map.set(pre, (map.get(pre) ?? 0) + 1);
    }

    return count;
  };

  // 枚举上边界
  for (let i = 0; i < m; i += 1) {
    const total = new Array<number>(n).fill(0);
    // 枚举下边界
    for (let j = i; j < m; j += 1) {
      // 枚举右边界（通过哈希表，问题转化为一维）
      for (let r = 0; r < n; r += 1) {
        // 计算每列的和
        total[r] += matrix[j][r];
      }
      res += helper(total, target);
    }
  }

  return res;
}
