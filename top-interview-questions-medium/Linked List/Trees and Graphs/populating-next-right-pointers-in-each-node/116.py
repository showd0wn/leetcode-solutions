# Definition for binary tree with next pointer.
# class TreeLinkNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#         self.next = None


class Solution:
    # @param root, a tree link node
    # @return nothing
    def connect(self, root):
        if not root: return
        queue = [root]
        while len(queue):
            size = len(queue)
            level = queue[:]

            for i in range(size):
                curr = queue.pop(0)
                curr.next = level[i + 1] if i + 1 < len(level) else None

                if curr.left: queue.append(curr.left)
                if curr.right: queue.append(curr.right)
