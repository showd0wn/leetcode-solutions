# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        result = []

        def helper(node, level):
            if not node:
                return
            if len(result) <= level:
                result.append([])
            result[level].append(node.val)
            helper(node.left, level + 1)
            helper(node.right, level + 1)

        helper(root, 0)
        return result
