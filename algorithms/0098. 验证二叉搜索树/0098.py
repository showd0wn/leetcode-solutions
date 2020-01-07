# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        return self.helper(root, None, None)

    def helper(self, root: TreeNode, minVal, maxVal) -> bool:
        if not root:
            return True
        if (minVal is not None and root.val <= minVal):
            return False
        if (maxVal is not None and root.val >= maxVal):
            return False
        return self.helper(root.left, minVal, root.val) \
            and self.helper(root.right, root.val, maxVal)
