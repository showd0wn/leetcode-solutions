# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def zigzagLevelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        result = []
        self.helper(root, 0, result)
        return result

    def helper(self, node, level, res):
        if not node: return
        if len(res) <= level: res.append([])
        if level % 2:
            res[level].insert(0, node.val)
        else:
            res[level].append(node.val)
        self.helper(node.left, level + 1, res)
        self.helper(node.right, level + 1, res)
