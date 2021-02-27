# topics = ["树", "深度优先搜索"]

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
    def sortedArrayToBST(self, nums: List[int]) -> Union[TreeNode, None]:
        if not len(nums):
            return None
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sortedArrayToBST(nums[0:mid])
        root.right = self.sortedArrayToBST(nums[mid + 1 :])
        return root
