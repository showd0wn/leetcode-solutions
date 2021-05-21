// topics = ["二叉树"]

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
 * Binary Tree & Generator
 * time O(n1 + n2), space O(n1 + n2), n1 和 n2 分别为两棵树的节点个数
 */
function leafSimilar(root1: TreeNode, root2: TreeNode): boolean {
  const dfs = function* (node: TreeNode): Generator<number, void, unknown> {
    if (!node.left && !node.right) {
      yield node.val;
    } else {
      if (node.left) {
        yield* dfs(node.left);
      }
      if (node.right) {
        yield* dfs(node.right);
      }
    }
  };

  const iter1 = dfs(root1);
  const iter2 = dfs(root2);
  let res1 = iter1.next();
  let res2 = iter2.next();

  while (res1.value == res2.value) {
    res1 = iter1.next();
    res2 = iter2.next();

    if (res1.done && res2.done) {
      return true;
    }
  }

  return false;
}
