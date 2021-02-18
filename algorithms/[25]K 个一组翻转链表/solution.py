# topics = ["链表"]


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        dummy = ListNode()
        dummy.next = head

        pre = dummy
        end = dummy

        while end.next:
            for i in range(k):
                end = end.next
                if not end:
                    return dummy.next

            start = pre.next
            next = end.next

            end.next = None
            pre.next = self.reverseList(start)
            start.next = next
            pre = start
            end = start

        return dummy.next

    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head

        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        return prev
