# topics = ["树"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from typing import List, Optional, Union


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
    def increasingBST(self, root: TreeNode) -> TreeNode:
        """
        原地修改 - 递归
        time O(n), space O(n), n 为二叉搜索树的节点总数
        """
        dummy = TreeNode()
        curr = dummy

        def inorder(node: Union[TreeNode, None]) -> None:
            nonlocal curr
            if not node:
                return
            inorder(node.left)
            curr.right = node
            node.left = None
            curr = node
            inorder(node.right)

        inorder(root)
        return dummy.right

    def increasingBST2(self, root: TreeNode) -> TreeNode:
        """
        原地修改 - 栈
        time O(n), space O(n), n 为二叉搜索树的节点总数
        """
        dummy = TreeNode()
        curr = dummy

        s: List[TreeNode] = []
        it = root

        while it or s:
            while it:
                s.append(it)
                it = it.left

            it = s.pop()
            curr.right = it
            it.left = None
            curr = it
            it = it.right

        return dummy.right
