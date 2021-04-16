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

function minDiffInBST(root: TreeNode | null): number {
  const q: number[] = [];
  const s: TreeNode[] = [];
  let it: TreeNode | null = root;

  while (it || s.length) {
    while (it) {
      s.push(it);
      it = it.left;
    }
    it = s.pop()!;
    q.push(it?.val);
    it = it.right;
  }

  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 1, n = q.length; i < n; i += 1) {
    res = Math.min(res, q[i] - q[i - 1]);
  }

  return res;
}
