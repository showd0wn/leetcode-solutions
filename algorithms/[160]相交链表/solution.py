# topics = ["链表", "哈希表"]

from __future__ import annotations
from typing import Union, Set


class ListNode:
    def __init__(self, x: int = 0):
        self.val = x
        self.next: Union[ListNode, None] = None


class Solution:
    def getIntersectionNode(
        self, headA: Union[ListNode, None], headB: Union[ListNode, None]
    ) -> ListNode:
        """
        Hash Table
        time O(m + n), space O(m), m 和 n 分别为 headA 和 headB 的长度
        """
        setA: Set[ListNode] = set()

        while headA:
            setA.add(headA)
            headA = headA.next

        while headB:
            if headB in setA:
                return headB
            headB = headB.next

        return ListNode()
