# topics = ["树"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from typing import Optional, List, Union


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
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        """
        近似题 94.二叉树的中序遍历
        time O(n), space O(n), n 为二叉搜索树的节点数
        """
        s: List[TreeNode] = []
        it: Union[TreeNode, None] = root
        res = 0

        while it or s:
            while it:
                s.append(it)
                it = it.left

            it = s.pop()
            if it.val > high:
                return res
            if low <= it.val <= high:
                res += it.val
            it = it.right

        return res
