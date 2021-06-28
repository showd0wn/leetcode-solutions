// topics = ["链表"]

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  // pre 记录当前变量节点的前驱
  let pre = dummy;
  // start 记录 left 的前驱
  let start = dummy;

  let count = 0;
  while (head) {
    const cur = head;
    head = head.next;
    count += 1;

    if (count == left - 1) {
      start = cur;
    } else if (left < count && count < right) {
      cur.next = pre;
    } else if (count == right) {
      cur.next = pre;
      // 此时 head 指向 right 的后继
      start.next!.next = head;
      start.next = cur;
      break;
    }

    pre = cur;
  }

  return dummy.next;
}
