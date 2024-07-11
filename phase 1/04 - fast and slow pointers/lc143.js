/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    let fast = head;
    let slow = head;

    // Find the middle of the list
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse the second half of the list
    function reverse(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    let secondHalf = reverse(slow.next);
    slow.next = null; // Cut the list into two halves

    // Merge the two halves
    let firstHalf = head;

    while (secondHalf) {
        let temp1 = firstHalf.next;
        let temp2 = secondHalf.next;

        firstHalf.next = secondHalf;
        secondHalf.next = temp1;

        firstHalf = temp1;
        secondHalf = temp2;
    }
};
