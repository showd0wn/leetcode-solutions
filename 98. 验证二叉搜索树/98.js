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
const isValidBST = function(root) {
    const helper = function(root, min, max) {
        if (!root) return true
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false
            return helper(root.left, min, root.val) && helper(root.right, root.val, max)
    }
    return helper(root, null, null)
}
