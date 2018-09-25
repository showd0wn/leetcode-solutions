# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head: return head

        odd = head
        even = head.next

        while odd.next and odd.next.next:
            node = odd.next
            odd.next = odd.next.next
            odd = odd.next
            node.next = odd.next

        odd.next = even

        return head
