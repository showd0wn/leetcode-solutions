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
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        dummy = ListNode()
        dummy.next = head
        # start 记录 left 的前驱，pre 记录当前变量节点的前驱
        pre = start = dummy

        count = 0
        while head:
            cur = head
            head = head.next
            count += 1

            if count == left - 1:
                start = cur
            elif left < count < right:
                cur.next = pre
            elif count == right:
                cur.next = pre
                # 此时 head 指向 right 的后继
                start.next.next = head
                start.next = cur
                break

            pre = cur

        return dummy.next
