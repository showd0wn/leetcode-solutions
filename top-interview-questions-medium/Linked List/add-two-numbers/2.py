# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        list = ListNode(0)
        head = list
        sum, carry = 0, 0
        while l1 is not None or l2 is not None or sum > 0:
            if l1 is not None:
                sum += l1.val
                l1 = l1.next
            if l2 is not None:
                sum += l2.val
                l2 = l2.next
            if sum >= 10:
                carry = 1
                sum -= 10

            head.next = ListNode(sum)
            head = head.next

            sum = carry
            carry = 0

        return list.next
