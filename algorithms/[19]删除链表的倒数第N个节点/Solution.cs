// topics = ["链表", "双指针"]

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
    public ListNode RemoveNthFromEnd(ListNode head, int n)
    {
        ListNode dummy = new ListNode();
        dummy.next = head;

        ListNode i = dummy;
        ListNode j = dummy;

        while (n > 0)
        {
            j = j.next;
            n--;
        }

        while (j.next != null)
        {
            i = i.next;
            j = j.next;
        }

        i.next = i.next.next;

        return dummy.next;
    }
}
