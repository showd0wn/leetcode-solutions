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
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        n = 0
        cur: Union[ListNode, None] = head
        while cur:
            cur = cur.next
            n += 1

        if n == 0 or k % n == 0:
            return head

        k %= n
        fast = slow = head
        while k:
            fast = fast.next
            k -= 1

        while fast.next:
            fast = fast.next
            slow = slow.next

        start = slow.next
        slow.next = None
        fast.next = head

        return start
