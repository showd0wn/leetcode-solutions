# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def kthSmallest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        """
        count = 0
        node = root
        stack = []
        while True:
            if node:
                stack.append(node)
                node = node.left
            else:
                if not len(stack): break
                node = stack.pop()
                count += 1
                if count == k: return node.val
                node = node.right
