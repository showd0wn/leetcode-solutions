# topics = ["链表"]


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

from __future__ import annotations
from typing import Union


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        dummy = ListNode()
        dummy.next = head

        pre = dummy
        end = dummy

        while end.next:
            for _ in range(k):
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

    def reverseList(self, head: Union[ListNode, None]) -> Union[ListNode, None]:
        prev = None
        curr = head

        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        return prev
