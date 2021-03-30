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
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        q: List[int] = []
        s: List[TreeNode] = []
        it: Union[TreeNode, None] = root
        # 记录之前访问的节点
        pre: Union[TreeNode, None] = None

        while it or s:
            while it:
                s.append(it)
                it = it.left

            it = s[-1]
            # 没有右子节点，或是从右子节点回溯回来
            if not it.right or it.right is pre:
                pre = it
                q.append(s.pop().val)
                it = None
            else:
                it = it.right

        return q
