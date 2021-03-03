// topics = ["链表", "分治算法"]

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const n = lists.length;
  if (n == 0) return null;

  const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };

  const merge = (left: number, right: number): ListNode | null => {
    if (left == right - 1) return lists[left];
    const mid = Math.floor((left + right) / 2);
    const l1 = merge(left, mid);
    const l2 = merge(mid, right);
    return mergeTwoLists(l1, l2);
  };

  return merge(0, n);
}
