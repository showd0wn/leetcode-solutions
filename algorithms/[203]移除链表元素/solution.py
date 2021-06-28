# topics = ["链表", "递归"]

from __future__ import annotations
from typing import Union


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


class Solution:
    def removeElements(self, head: Union[ListNode, None], val: int) -> Union[ListNode, None]:
        """
        递归
        time O(n), space O(n), n 为链表长度
        """
        if not head:
            return head
        head.next = self.removeElements(head.next, val)
        return head.next if head.val == val else head
