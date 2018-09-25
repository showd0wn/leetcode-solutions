/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return head

  let odd = head
  let even = head.next

  while (odd.next && odd.next.next) {
    let node = odd.next
    odd.next = odd.next.next
    odd = odd.next
    node.next = odd.next
  }

  odd.next = even

  return head
}
