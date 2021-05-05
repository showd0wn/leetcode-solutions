# topics = ["树", "栈"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from typing import Optional, List


class TreeNode:
    def __init__(
        self,
        x: int = 0,
        left: Optional[TreeNode] = None,
        right: Optional[TreeNode] = None,
    ):
        self.val = x
        self.left = left
        self.right = right


class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        """
        Iterate
        time O(n), space O(n), n 为前序遍历的长度
        """
        n = len(preorder)
        root = TreeNode(preorder[0])
        stack = [root]

        for i in range(1, n):
            node, child = stack[-1], TreeNode(preorder[i])

            while stack and stack[-1].val < child.val:
                node = stack.pop()

            if node.val < child.val:
                node.right = child
            else:
                node.left = child

            stack.append(child)

        return root
