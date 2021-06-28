// topics = ["链表"]

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 迭代
 * time O(n), space O(1), n 为链表长度
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  let node = dummy;
  while (node.next) {
    if (node.next.val == val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return dummy.next;
}
