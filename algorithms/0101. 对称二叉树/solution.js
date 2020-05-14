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
const isSymmetric = function(root) {
    const helper = function(tree1, tree2) {
        if (!tree1 && !tree2) return true
        if (!tree1 || !tree2) return false
        return tree1.val === tree2.val
            && helper(tree1.left, tree2.right)
            && helper(tree1.right, tree2.left)
    }
    return helper(root, root)
}
