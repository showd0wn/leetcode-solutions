# topics = ["链表"]

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

from __future__ import annotations
from typing import Union
import sys


class ListNode:
    def __init__(self, val: int = 0):
        self.val = val
        self.next: Union[ListNode, None] = None
        self.prev: Union[ListNode, None] = None


class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        dummy = ListNode(-sys.maxsize - 1)
        dummy.prev = None
        dummy.next = head

        # 转换成双向链表
        head.prev = dummy
        while head and head.next:
            prev = head
            head = head.next
            head.prev = prev

        head = dummy.next
        while head:
            next = head.next
            prev = head.prev
            # 从后往前找插入位置
            while prev and head.val < prev.val:
                prev = prev.prev
            # 交换 prev 和 head
            head.prev.next = head.next
            if head.next:
                head.next.prev = head.prev
            head.next = prev.next
            if head.next:
                head.next.prev = head
            head.prev = prev
            head.prev.next = head
            head = next

        return dummy.next

    def insertionSortList2(self, head: ListNode) -> ListNode:
        dummy = ListNode(-sys.maxsize - 1)
        dummy.prev = None
        dummy.next = head

        # 转换成双向链表
        head.prev = dummy
        while head and head.next:
            prev = head
            head = head.next
            head.prev = prev

        head = dummy.next
        while head:
            next = head.next
            prev = head.prev
            # 从后往前找，两两交换，只交换值
            while prev and head.val < prev.val:
                head.val, prev.val = prev.val, head.val
                head = prev
                prev = prev.prev
            head = next

        return dummy.next
