# topics = ["链表"]

from __future__ import annotations
from typing import Union


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        while head:
            next = head.next
            head.next = prev
            prev = head
            head = next
        return prev
