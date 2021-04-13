# topics = ["树"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from __future__ import annotations
from typing import List, Union
import sys


class TreeNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.left: Union[TreeNode, None] = None
        self.right: Union[TreeNode, None] = None


class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        q: List[int] = []

        def inorderTraversal(node: Union[TreeNode, None]) -> None:
            if node is None:
                return
            inorderTraversal(node.left)
            q.append(node.val)
            inorderTraversal(node.right)

        inorderTraversal(root)

        n = len(q)
        res = sys.maxsize
        for i in range(1, n):
            res = min(res, q[i] - q[i - 1])

        return res
