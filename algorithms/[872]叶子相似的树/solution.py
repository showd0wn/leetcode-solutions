# topics = ["二叉树"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from typing import Generator, List, Optional


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
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        """
        Binary Tree
        time O(n1 + n2), space O(n1 + n2), n1 和 n2 分别为两棵树的节点个数
        """
        return self.getLeaf(root1) == self.getLeaf(root2)

    def getLeaf(self, root: TreeNode) -> List[int]:
        res: List[int] = []

        def helper(node: TreeNode) -> None:
            if not node.left and not node.right:
                res.append(node.val)
                return
            if node.left:
                helper(node.left)
            if node.right:
                helper(node.right)

        helper(root)

        return res

    def leafSimilar2(self, root1: TreeNode, root2: TreeNode) -> bool:
        """
        生成器写法
        """

        def helper(node: TreeNode) -> Generator[int, None, None]:
            if not node.left and not node.right:
                yield node.val
            else:
                if node.left:
                    yield from helper(node.left)
                if node.right:
                    yield from helper(node.right)

        return list(helper(root1)) == list(helper(root2))
