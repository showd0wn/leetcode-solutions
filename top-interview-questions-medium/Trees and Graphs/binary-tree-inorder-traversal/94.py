# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    # def inorderTraversal(self, root):
    #     """
    #     :type root: TreeNode
    #     :rtype: List[int]
    #     """
    #     result = []
    #     self.helper(root, result)
    #     return result
    #
    # def helper(self, root, array):
    #     if not root: return
    #     if root.left: self.helper(root.left, array)
    #     array.append(root.val)
    #     if root.right: self.helper(root.right, array)

    def inorderTraversal(self, root):
        result = []
        stack = []
        cur = root
        while cur or len(stack):
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            result.append(cur.val)
            cur = cur.right
        return result
