// topics = ["树", "深度优先搜索", "栈"]

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

function isValidBST(root: TreeNode | null): boolean {
  // 二叉搜索树的中序遍历的值序列为递增序列
  // 使用栈模拟中序遍历
  const stack: (TreeNode | null)[] = [];
  let pre = -Infinity;

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;

    // 不满足递增，则不是二叉搜索树
    if (root.val <= pre) {
      return false;
    }

    pre = root.val;
    root = root.right;
  }

  return true;
}
