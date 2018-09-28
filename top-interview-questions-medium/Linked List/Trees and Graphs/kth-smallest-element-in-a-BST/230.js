/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
//   const helper = (node, array) => {
//     if (!node) return []
//     return [...helper(node.left), node.val, ...helper(node.right)]
//   }
//   return helper(root)[k - 1]
// }

var kthSmallest = function(root, k) {
  let count = 0
  let node = root
  let stack = []
  while (true) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      if (!stack.length) break
      node = stack.pop()
      count += 1
      if (count === k) return node.val
      node = node.right
    }
  }
}
