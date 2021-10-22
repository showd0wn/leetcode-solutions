class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sum = new ListNode();
        ListNode cur = sum;
        int carry = 0;
        while (l1 != null || l2 != null || carry > 0) {
            cur.next = new ListNode();
            cur = cur.next;

            if (l1 != null) {
                carry += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                carry += l2.val;
                l2 = l2.next;
            }

            cur.val = carry % 10;
            carry /= 10;
        }
        return sum.next;
    }
}
