// topics = ["树", "深度优先搜索"]

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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function minDepth(root: TreeNode | null): number {
  const helper = (node: TreeNode, k: number): number => {
    if (!node.left && !node.right) {
      return k;
    }
    if (!node.left) {
      return helper(node.right!, k + 1);
    }
    if (!node.right) {
      return helper(node.left!, k + 1);
    }
    return Math.min(helper(node.left, k + 1)!, helper(node.right, k + 1));
  };

  if (!root) {
    return 0;
  }
  return helper(root, 1);
}
