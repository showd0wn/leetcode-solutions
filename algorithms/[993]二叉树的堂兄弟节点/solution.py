# topics = ["树"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from typing import Union, Optional


class TreeNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.left: Union[TreeNode, None] = None
        self.right: Union[TreeNode, None] = None


class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        """
        Binary Tree & DFS
        time O(n), space O(n), n 为二叉树节点个数
        """
        # x 的信息
        x_parent_val, x_depth = -1, -1
        # y 的信息
        y_parent_val, y_depth = -1, -1

        def dfs(node: Optional[TreeNode], parent_val: int, depth: int):
            if not node:
                return

            nonlocal x_parent_val, x_depth, y_parent_val, y_depth

            if node.val == x:
                x_parent_val, x_depth = parent_val, depth
            elif node.val == y:
                y_parent_val, y_depth = parent_val, depth

            dfs(node.left, node.val, depth + 1)
            dfs(node.right, node.val, depth + 1)

        dfs(root, 0, 0)

        return x_parent_val != y_parent_val and x_depth == y_depth
