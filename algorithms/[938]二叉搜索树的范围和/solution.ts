// topics = ["树"]

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

/**
 * Recursion
 * time O(n), space O(n), n 为二叉搜索树的节点数
 */
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let res = 0;

  const helper = (node: TreeNode | null): void => {
    if (!node) return;
    helper(node.left);
    if (node.val > high) {
      return;
    }
    if (low <= node.val && node.val <= high) {
      res += node.val;
    }
    helper(node.right);
  };

  helper(root);
  return res;
}
