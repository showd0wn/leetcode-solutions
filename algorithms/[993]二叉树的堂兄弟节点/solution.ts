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
  parent?: TreeNode | null;
  depth?: number;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export interface nodeInfo {
  parentVal: number;
  depth: number;
}

/**
 * Binary Tree & DFS
 * time O(n), space O(n), n 为二叉树节点个数
 */
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  // 记录每个节点（值）的父节点（值）和深度
  const map = new Map<number, nodeInfo>();
  const dfs = (node: TreeNode, parentVal: number, depth: number) => {
    map.set(node.val, { parentVal, depth });
    if (node.left) {
      dfs(node.left, node.val, depth + 1);
    }
    if (node.right) {
      dfs(node.right, node.val, depth + 1);
    }
  };

  dfs(root!, 0, 0);

  const nodex = map.get(x)!;
  const nodey = map.get(y)!;
  return nodex.parentVal != nodey.parentVal && nodex.depth == nodey.depth;
}
