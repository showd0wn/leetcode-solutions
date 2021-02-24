# topics = ["链表", "堆"]

import heapq
from typing import List


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists:
            return None

        heap = []

        for node in lists:
            while node:
                heapq.heappush(heap, node.val)
                node = node.next

        dummy = ListNode()
        cur = dummy

        while heap:
            node = ListNode(heappop(heap))
            cur.next = node
            cur = node

        return dummy.next
