// topics = ["树", "栈"]

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

// 同 94.二叉树的中序遍历
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

class BSTIterator {
  stack: TreeNode[];
  iter: TreeNode | null;
  constructor(root: TreeNode | null) {
    this.stack = [];
    this.iter = root;
  }

  next(): number {
    while (this.iter != null) {
      this.stack.push(this.iter!);
      this.iter = this.iter!.left;
    }
    this.iter = this.stack.pop()!;
    const val = this.iter?.val;
    this.iter = this.iter.right;

    return val;
  }

  hasNext(): boolean {
    return this.iter != null || this.stack.length != 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
