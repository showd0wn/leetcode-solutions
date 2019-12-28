/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// eslint-disable-next-line no-unused-vars
const deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
}
