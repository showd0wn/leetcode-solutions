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

// eslint-disable-next-line no-unused-vars
const reverseList = function(head) {
    let prev = null
    while (head) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}
