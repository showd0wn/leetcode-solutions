# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        fast = slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        prev = None
        while slow:
            next = slow.next
            slow.next = prev
            prev = slow
            slow = next

        while prev:
            if prev.val != head.val:
                return False
            prev = prev.next
            head = head.next
        return True
