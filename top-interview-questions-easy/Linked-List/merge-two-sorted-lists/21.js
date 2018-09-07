/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// iteratively
// var mergeTwoLists = function(l1, l2) {
//   var head = new ListNode(-1)
//   var current = head
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       current.next = l1
//       l1 = l1.next
//     } else {
//       current.next = l2
//       l2 = l2.next
//     }
//     current = current.next
//   }
//   current.next = l1 || l2
//   return head.next
// }

// recursively
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
