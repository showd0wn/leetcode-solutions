# topics = ["树", "栈"]

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


class BSTIterator:
    def __init__(self, root: TreeNode):
        self.iter: Union[TreeNode, None] = root
        self.stack: List[TreeNode] = []

    def next(self) -> int:
        while self.iter:
            self.stack.append(self.iter)
            self.iter = self.iter.left

        self.iter = self.stack.pop()
        val = self.iter.val
        self.iter = self.iter.right

        return val

    def hasNext(self) -> bool:
        return self.iter is not None or len(self.stack) != 0


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()
