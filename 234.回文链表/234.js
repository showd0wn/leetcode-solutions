/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// eslint-disable-next-line no-unused-vars
const isPalindrome = function(head) {
    if (!head || !head.next) return true

    // find middle
    let slow = head, fast = head, cacheHead = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse link list
    let prev = null
    while (slow) {
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    // judge palindrom
    let list1 = cacheHead, list2 = prev
    for (; list2; list1 = list1.next, list2 = list2.next) {
        if (list1.val !== list2.val) return false
    }
    return true
}
