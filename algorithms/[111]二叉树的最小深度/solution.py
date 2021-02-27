# topics = ["树", "广度优先搜索"]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, x: int = 0, left: Optional[TreeNode] = None, right: Optional[TreeNode] = None):
        self.val = x
        self.left = left
        self.right = right


class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        res = 0
        queue = deque()
        queue.append(root)

        while queue:
            res += 1
            # 一次处理一层
            for _ in range(len(queue)):
                node = queue.popleft()
                if not node.left and not node.right:
                    return res
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return res
