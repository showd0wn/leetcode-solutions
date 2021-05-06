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
 * 中序遍历 - 递归
 * time O(n), space O(n), n 为二叉搜索树的节点总数
 */
function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode();
  let curr = dummy;

  const inorder = (node: TreeNode | null): void => {
    if (!node) return;
    inorder(node.left);
    curr.right = new TreeNode(node.val);
    curr = curr.right;
    inorder(node.right);
  };

  inorder(root);
  return dummy.right;
}

/**
 * 中序遍历 - 栈
 * time O(n), space O(n), n 为二叉搜索树的节点总数
 */
function increasingBST2(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode();
  let curr = dummy;

  const stack: TreeNode[] = [];
  let it = root;

  while (it || stack.length) {
    while (it) {
      stack.push(it);
      it = it.left;
    }
    it = stack.pop()!;
    curr.right = new TreeNode(it.val);
    curr = curr.right;
    it = it.right;
  }

  return dummy.right;
}
