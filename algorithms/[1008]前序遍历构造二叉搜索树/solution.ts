// topics = ["树", "递归"]

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

function bstFromPreorder(preorder: number[]): TreeNode | null {
  const helper = (list: number[]): TreeNode | null => {
    const n = list.length;

    if (n == 0) {
      return null;
    }

    const root = new TreeNode(list[0]);
    const index = list.findIndex((i) => i > list[0]);

    if (index == -1) {
      root.left = helper(list.slice(1));
      root.right = null;
    } else {
      root.left = helper(list.slice(1, index));
      root.right = helper(list.slice(index, n));
    }

    return root;
  };

  return helper(preorder);
}
