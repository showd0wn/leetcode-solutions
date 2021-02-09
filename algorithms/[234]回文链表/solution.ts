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

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  /**
   * 快慢指针 + 原地翻转链表，使得空间复杂度为常量
   */
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  let prev: ListNode | null = null;
  while (slow) {
    const next = slow.next!;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  while (prev) {
    if (prev.val !== head!.val) {
      return false;
    }
    prev = prev!.next;
    head = head!.next;
  }

  return true;
}
