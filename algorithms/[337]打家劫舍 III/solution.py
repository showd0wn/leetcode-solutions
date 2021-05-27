# topics = ["动态规划", "深度优先搜索"]


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from __future__ import annotations
from typing import Optional, Union
from collections import Counter


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
    def rob(self, root: TreeNode) -> int:
        f: Counter[Union[TreeNode, None]] = Counter()
        g: Counter[Union[TreeNode, None]] = Counter()

        def dfs(node: Union[TreeNode, None]) -> None:
            if node is None:
                return

            dfs(node.left)
            dfs(node.right)

            select_max = node.val + g[node.left] + g[node.right]
            unselect_max = max(f[node.left], g[node.left]) + max(f[node.right], g[node.right])
            f[node] = select_max
            g[node] = unselect_max

        dfs(root)

        return max(f[root], g[root])
