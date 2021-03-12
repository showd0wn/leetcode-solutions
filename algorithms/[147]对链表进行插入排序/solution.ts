// topics = ["链表"]

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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const dummy = new ListNode(0);
  dummy.next = head;

  let lastSorted = head;

  while (head) {
    const next: ListNode | null = head.next;
    if (head.val >= lastSorted.val) {
      lastSorted = head;
    } else {
      // 从前往后找插入位置
      let prev = dummy;
      while (prev.next!.val < head.val) {
        prev = prev.next!;
      }
      lastSorted.next = head.next;
      head.next = prev.next;
      prev.next = head;
    }
    head = next;
  }

  return dummy.next;
}
