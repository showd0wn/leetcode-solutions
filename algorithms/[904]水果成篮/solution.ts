// topics = ["滑动窗口", "哈希表"]

/**
 * Sliding Window
 * time O(n), space O(n), n 为 tree 的长度
 */
function totalFruit(tree: number[]): number {
  const n = tree.length;
  let i = 0;
  let j = 0;
  let res = 0;

  const count = new Map<number, number>();

  while (j < n) {
    if (count.has(tree[j])) {
      count.set(tree[j], count.get(tree[j])! + 1);
    } else {
      count.set(tree[j], 1);
    }

    while (count.size > 2) {
      res = Math.max(res, j - i);
      i += 1;
      count.set(tree[i - 1], count.get(tree[i - 1])! - 1);
      if (count.get(tree[i - 1]) == 0) {
        count.delete(tree[i - 1]);
      }
    }

    j += 1;
  }

  return Math.max(res, j - i);
}
