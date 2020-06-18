# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from typing import List


class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        result = []
        self.helper(result, root, 0)
        return result

    def helper(self, result, node, level):
        if not node:
            return
        if len(result) <= level:
            result.append([])
        result[level].append(node.val)
        self.helper(result, node.left, level + 1)
        self.helper(result, node.right, level + 1)
