// topics = ["链表"]

using System.Collections.Generic;

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

public class NodeComparasion : IComparer<ListNode>
{
    public int Compare(ListNode a, ListNode b)
    {
        return a.val >= b.val ? 1 : -1;
    }
}

public class Solution
{
    public ListNode MergeKLists(ListNode[] lists)
    {
        SortedSet<ListNode> ss = new SortedSet<ListNode>(new NodeComparasion());

        for (int i = 0; i < lists.Length; i++)
        {
            ListNode node = lists[i];
            while (node != null)
            {
                ss.Add(node);
                node = node.next;
            }
        }

        ListNode dummy = new ListNode();
        ListNode cur = dummy;

        foreach (ListNode node in ss)
        {
            cur.next = node;
            cur = node;
        }

        return dummy.next;
    }
}
