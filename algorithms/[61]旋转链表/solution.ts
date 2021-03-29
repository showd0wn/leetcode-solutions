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

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !k) {
    return head;
  }

  let n = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    n += 1;
  }

  // 首尾相连成环
  cur.next = head;

  let step = n - (k % n);
  while (--step) {
    head = head!.next;
  }

  const start = head!.next;
  head!.next = null;

  return start;
}
