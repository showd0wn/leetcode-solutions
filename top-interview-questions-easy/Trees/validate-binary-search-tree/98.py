# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root: return True

        def helper(root, min, max):
            if not root: return True
            if ((min is not None and root.val <= min) or (max is not None and root.val >= max)):
                return False
            return helper(root.left, min, root.val) \
                and helper(root.right, root.val, max)

        return helper(root, None, None)
