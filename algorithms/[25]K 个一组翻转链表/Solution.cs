// topics = ["链表"]

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
    public ListNode ReverseKGroup(ListNode head, int k)
    {
        ListNode dummy = new ListNode();
        dummy.next = head;

        ListNode pre = dummy;
        ListNode end = dummy;

        while (end.next != null)
        {
            int i = 0;
            while (i++ < k)
            {
                end = end.next;
                if (end == null)
                {
                    return dummy.next;
                }
            }

            ListNode start = pre.next;
            ListNode next = end.next;

            end.next = null;
            pre.next = reverseList(start);
            start.next = next;
            pre = start;
            end = start;
        }

        return dummy.next;
    }

    public ListNode reverseList(ListNode head)
    {
        if (head == null || head.next == null)
        {
            return head;
        }

        ListNode prevNode = null;
        ListNode currNode = head;

        while (currNode != null)
        {
            ListNode nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }

        return prevNode;
    }
}
