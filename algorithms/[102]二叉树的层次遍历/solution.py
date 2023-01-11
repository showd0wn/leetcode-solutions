# topics = ["树", "递归"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from __future__ import annotations
from typing import Optional, List, Union


class TreeNode:
    def __init__(self, x: int = 0, left: Optional[TreeNode] = None, right: Optional[TreeNode] = None):
        self.val = x
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        result: List[List[int]] = []
        self.helper(result, root, 0)
        return result

    def helper(self, result: List[List[int]], node: Union[TreeNode, None], level: int) -> None:
        if not node:
            return
        if len(result) <= level:
            result.append([])
        result[level].append(node.val)
        self.helper(result, node.left, level + 1)
        self.helper(result, node.right, level + 1)
