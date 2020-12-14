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
const levelOrderBottom = function (root) {
  const result = [];
  const helper = function(node = root, level = 0) {
    if (!node) return;
    if (result.length <= level) {
      result.push([]);
    }
    result[level].push(node.val);
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  }

  helper();

  return result.reverse();
};