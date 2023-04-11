// topics = ["链表", "数学"]

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 模拟
 * time O(max(m,n)), space O(1), m 和 n 分别为两个链表的长度
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let head = dummy;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    head.next = new ListNode(sum % 10);
    head = head.next;
    carry = Math.floor(sum / 10);
  }

  if (carry) {
    head.next = new ListNode(carry);
  }

  return dummy.next;
}
