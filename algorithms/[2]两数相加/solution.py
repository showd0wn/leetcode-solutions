# topics = ["链表", "数学"]

from __future__ import annotations
from typing import Union


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        """
        模拟法
        time O(max(m,n)) space O(1), m 和 n 分别为两个链表的长度
        """
        dummy = ListNode()
        head = dummy
        carry = 0

        while l1 or l2:
            sum = carry
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next
            head.next = ListNode(sum % 10)
            head = head.next
            carry = sum // 10

        if carry:
            head.next = ListNode(carry)

        return dummy.next
