// topics = ["链表"]

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  let pre = dummy;
  let val: number | undefined;
  // 遍历非尾节点
  while (head && head.next) {
    if (head.val == head.next.val || head.val == val) {
      val = head.val;
      head.val = head.next.val;
      head.next = head.next.next;
    } else {
      pre = head;
      head = head.next;
    }
  }

  // 单独判断尾节点
  if (head?.val == val) {
    pre.next = null;
  }

  return dummy.next;
}
