/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return
  const queue = [root]
  while (queue.length) {
    const size = queue.length
    const level = [...queue]

    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift()
      currentNode.next = level[i + 1]
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
  }
}
