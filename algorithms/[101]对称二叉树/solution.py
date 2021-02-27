# topics = ["树", "深度优先搜索"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


from __future__ import annotations
from typing import Union


class TreeNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.left: Union[TreeNode, None] = None
        self.right: Union[TreeNode, None] = None


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        """
        :type root: TreeNode
        :rtype: bool
        """

        def helper(tree1: Union[TreeNode, None], tree2: Union[TreeNode, None]) -> bool:
            if not tree1 and not tree2:
                return True
            if not tree1 or not tree2:
                return False
            return tree1.val == tree2.val and helper(tree1.left, tree2.right) and helper(tree1.right, tree2.left)

        return helper(root, root)
