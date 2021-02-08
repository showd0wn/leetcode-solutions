// topics = ["树", "广度优先搜索"]

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res: number[][] = [];
  const q: TreeNode[] = [root];

  while (q.length) {
    res.push([]);
    // 区别于一般的 BFS，一次处理当前队列的全部元素
    for (let i = 0, len = q.length; i < len; i += 1) {
      const node = q.shift()!;
      res[res.length - 1].push(node.val);
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }

  return res;
};
