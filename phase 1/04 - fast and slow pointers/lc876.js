/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head
    let slow = head

    if (head.next == null) {return head}

    while (fast && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

     return slow

};