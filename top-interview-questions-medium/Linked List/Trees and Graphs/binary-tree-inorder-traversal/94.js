/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//   const result = []
//   const helper = function(root, array) {
//     if (!root) return
//     if (root.left) helper(root.left, array)
//     array.push(root.val)
//     if (root.right) helper(root.right, array)
//
//   }
//   helper(root, result)
//   return result
// }

var inorderTraversal = function(root) {
  const result = []
  const stack = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    result.push(cur.val)
    cur = cur.right
  }
  return result
}
