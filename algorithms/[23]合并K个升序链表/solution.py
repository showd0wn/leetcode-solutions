# topics = ["链表", "堆"]

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


from __future__ import annotations
from typing import Union, List
import heapq


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        heap: List[int] = []

        for node in lists:
            while node:
                heapq.heappush(heap, node.val)
                node = node.next

        dummy = ListNode()
        cur = dummy

        while heap:
            node = ListNode(heapq.heappop(heap))
            cur.next = node
            cur = node

        return dummy.next
