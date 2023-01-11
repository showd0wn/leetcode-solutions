# topics = ["树", "深度优先搜索"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from __future__ import annotations
from typing import Optional, Union


class TreeNode:
    def __init__(self, x: int = 0, left: Optional[TreeNode] = None, right: Optional[TreeNode] = None):
        self.val = x
        self.left = left
        self.right = right


class Solution:
    def maxDepth(self, root: Union[TreeNode, None]) -> int:
        if not root:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1
