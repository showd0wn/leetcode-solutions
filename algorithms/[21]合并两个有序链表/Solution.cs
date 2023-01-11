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
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        ListNode dummy = new ListNode();
        ListNode p = dummy;

        while (list1 != null && list2 != null)
        {
            if (list1.val <= list2.val)
            {
                p.next = list1;
                list1 = list1.next;
            }
            else
            {
                p.next = list2;
                list2 = list2.next;
            }
            p = p.next;
        }

        p.next = list1 != null ? list1 : list2;

        return dummy.next;
    }
}
