// topics = ["链表", "双指针"]

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 添加一个哑节点指向头节点（给头节点添加先驱节点，减少特殊性判断）
  const start: ListNode = new ListNode();
  start.next = head;

  let i = start;
  let j = start;

  while (n--) j = j.next!;

  while (j.next) {
    j = j.next!;
    i = i.next!;
  }

  i.next = i.next?.next!;

  return start.next;
}
