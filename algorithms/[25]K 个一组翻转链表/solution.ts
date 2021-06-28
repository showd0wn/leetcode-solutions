// topics = ["链表"]

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // 要求 O(1) 的空间复杂度，不能使用递归
  // 参考 https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/tu-jie-kge-yi-zu-fan-zhuan-lian-biao-by-user7208t/

  // 哑节点
  const dummy: ListNode = new ListNode();
  dummy.next = head;

  // pre 指每次要翻转的链表的头结点的上一个节点
  let pre: ListNode = dummy;
  // end 指每次要翻转的链表的尾节点
  let end: ListNode | null = dummy;

  while (end?.next) {
    let i = 0;
    while (i++ < k) {
      end = end.next;
      if (!end) {
        return dummy.next;
      }
    }

    // start 是待翻转链表的头节点
    const start: ListNode = pre.next!;
    // next 是未翻转链表的头节点
    const next: ListNode | null = end.next;

    end.next = null;
    pre.next = reverseList(start);
    start.next = next;
    pre = start;
    end = start;
  }

  return dummy.next;
}

function reverseList(head: ListNode | null) {
  if (!head || !head.next) {
    return head;
  }

  let prevNode: ListNode | null = null;
  let currNode: ListNode | null = head;

  while (currNode) {
    const nextNode: ListNode | null = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
}
