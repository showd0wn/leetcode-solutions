// topics = ["链表", "数学"]

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}

public class Solution
{
    /// <summary>
    /// 模拟法
    /// time O(max(m,n)) space O(1), m 和 n 分别为两个链表的长度
    /// </summary>
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        ListNode dummy = new ListNode();
        ListNode head = dummy;
        int carry = 0;

        while (l1 != null || l2 != null)
        {
            int sum = carry;
            if (l1 != null)
            {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null)
            {
                sum += l2.val;
                l2 = l2.next;
            }
            head.next = new ListNode(sum % 10);
            head = head.next;
            carry = sum / 10;
        }

        if (carry != 0)
        {
            head.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
