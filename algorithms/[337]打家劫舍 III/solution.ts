// topics = ["动态规划", "深度优先遍历"]

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

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 参考 https://leetcode-cn.com/problems/house-robber-iii/solution/da-jia-jie-she-iii-by-leetcode-solution/
function rob(root: TreeNode | null): number {
  // 记录每个节点选中时，其子树的最大和
  const f = new Map<TreeNode | null, number>();
  // 记录每个节点没被选中时，其子树的最大和
  const g = new Map<TreeNode | null, number>();
  f.set(null, 0);
  g.set(null, 0);

  const dfs = (node: TreeNode | null): void => {
    if (node === null) {
      return;
    }
    dfs(node.left);
    dfs(node.right);

    const selectedMax = node.val + g.get(node.left)! + g.get(node.right)!;
    const unSelectedMax = Math.max(f.get(node.left)!, g.get(node.left)!) + Math.max(f.get(node.right)!, g.get(node.right)!);
    f.set(node, selectedMax);
    g.set(node, unSelectedMax);
  };

  dfs(root);

  return Math.max(f.get(root)!, g.get(root)!);
}
