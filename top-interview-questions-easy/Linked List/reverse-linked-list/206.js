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

// iteratively
var reverseList = function(head) {
  var prev = null
  while (head) {
    var next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

// recursively
// var reverseList = function(head) {
//   if (!head || !head.next) {
//     return head
//   }
//   var newHead =  reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return newHead
// }
