/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const result = [];
  const helper = function(node = root, level = 0) {
      if (!node) return;
      if (result.length <= level) result.push([]);
      if (level % 2) {
        result[level].unshift(node.val);
      } else {
        result[level].push(node.val);
      }
      helper(node.left, level + 1);
      helper(node.right, level + 1);
  }
  helper();
  return result;
};
