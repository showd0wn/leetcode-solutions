# topics = ["树", "深度优先搜索"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


from typing import Union


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        return self.helper(root, None, None)

    def helper(self, root: TreeNode, minVal: Union[int, None], maxVal: Union[int, None]) -> bool:
        if not root:
            return True
        if minVal is not None and root.val <= minVal:
            return False
        if maxVal is not None and root.val >= maxVal:
            return False
        return self.helper(root.left, minVal, root.val) and self.helper(
            root.right, root.val, maxVal
        )
