# topics = ["链表", "数学"]

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        """
        模拟
        time O(max(m,n)), space O(1), m 和 n 分别为两个链表的长度
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
