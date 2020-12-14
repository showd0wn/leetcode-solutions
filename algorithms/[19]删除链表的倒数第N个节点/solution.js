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
const removeNthFromEnd = function(head, n) {
    const start = new ListNode(0)
    start.next = head

    // 快慢指针
    let i = start, j = start
    while (n--) {
        j = j.next
    }
    while (j.next) {
        i = i.next
        j = j.next
    }

    i.next = i.next.next
    return start.next
}
