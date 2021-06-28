# topics = ["链表"]

from __future__ import annotations
from typing import Union


class ListNode:
    def __init__(self, val: int = 0, next: Union[ListNode, None] = None):
        self.val = val
        self.next: Union[ListNode, None] = next


class Solution:
    def deleteDuplicates(self, head: ListNode) -> Union[ListNode, None]:
        if not head:
            return head

        dummy = ListNode(0, head)
        cur = dummy

        while cur.next and cur.next.next:
            if cur.next.val == cur.next.next.val:
                x = cur.next.val
                while cur.next and cur.next.val == x:
                    cur.next = cur.next.next
            else:
                cur = cur.next

        return dummy.next
