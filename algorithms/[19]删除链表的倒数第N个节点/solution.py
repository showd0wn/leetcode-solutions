# topics = ["链表", "双指针"]

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

from __future__ import annotations
from typing import Union


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


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
