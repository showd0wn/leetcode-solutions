// topics = ["链表", "双指针"]

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Two Pointers
 * time O(m + n), space O(1), m 和 n 分别为 headA 和 headB 的长度
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) {
    return null;
  }
  // 当 pA 到达链表的尾部时，将它重定位到链表 B 的头结点
  // 当 pB 到达链表的尾部时，将它重定位到链表 A 的头结点
  // 参考 https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-xiang-jiao-lian-biao-by-user7208t/
  let pA: ListNode | null = headA;
  let pB: ListNode | null = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  // 不相交时为 null
  return pA;
}
