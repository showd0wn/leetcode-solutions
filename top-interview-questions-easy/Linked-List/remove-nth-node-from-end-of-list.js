/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var start = new ListNode(0)
  start.next = head

  var i = start, j = start
  while (n--) {
    j = j.next
  }
  while (j.next) {
    i = i.next
    j = j.next
  }

  i.next = i.next.next
  return start.next
};
