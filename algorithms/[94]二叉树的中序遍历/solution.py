# topics = ["树", "栈"]

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
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        q: List[int] = []
        s: List[TreeNode] = []
        it: Union[TreeNode, None] = root

        while it or s:
            while it:
                s.append(it)
                it = it.left

            it = s.pop()
            q.append(it.val)
            it = it.right

        return q
