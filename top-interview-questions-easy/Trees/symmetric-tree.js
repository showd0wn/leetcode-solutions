/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// recursively
var isSymmetric = function(root) {
  var helper = function(tree1, tree2) {
    if (!tree1 && !tree2) return true
    if (!tree1 || !tree2) return false
    return tree1.val === tree2.val
          && helper(tree1.left, tree2.right)
          && helper(tree1.right, tree2.left)
  }
  return helper(root, root)
};

// iteratively
var isSymmetric = function(root) {
  var q = []
  q.push(root)
  q.push(root)
  while (q.length) {
    var t1 = q.shift()
    var t2 = q.shift()
    if (!t1 && !t2) continue
    if (!t1 || !t2 ) return false
    if (t1.val !== t2.val) return false
    q.push(t1.left)
    q.push(t2.right)
    q.push(t1.right)
    q.push(t2.left)
  }
  return true
}
