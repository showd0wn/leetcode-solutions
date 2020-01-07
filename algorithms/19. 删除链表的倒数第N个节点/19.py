# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        start = ListNode(0)
        start.next = head

        i = j = start
        while n:
            j = j.next
            n -= 1
        while j.next:
            i = i.next
            j = j.next

        i.next = i.next.next
        return start.next
