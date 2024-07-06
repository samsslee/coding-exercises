/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    if (!head || left === right) return head;

    let count = 1
    let dummy = new ListNode(null, head)
    let leftprev = dummy
    let curr = head
    while (count < left){
        leftprev = curr
        curr = curr.next
        count++
    }

    let prev = null
    let start = curr

    while(count<=right && curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        count++
    }

    leftprev.next = prev
    start.next = curr

    return dummy.next

};