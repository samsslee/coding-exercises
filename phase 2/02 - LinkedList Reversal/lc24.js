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
var swapPairs = function(head) {
    
    //base case
    if(head == null || head.next ==null){
        return head
    }

    let dummy = new ListNode(null, head)
    let prev = dummy
    let curr = head

    while (curr != null && curr.next != null){
        let next = curr.next
        curr.next = next.next
        next.next = prev.next
        prev.next = next

        prev = curr
        curr = curr.next
    }

    return dummy.next


};