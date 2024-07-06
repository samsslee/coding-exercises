/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // with linked lists, it often makes sense to start it off with a dummy node to give it a "starter"
    if (head == null || head.next == null){return head}
    
    let andAbove = new ListNode()
    let below = new ListNode()

    let ptA = andAbove
    let ptB = below
    let pt = head

    while (pt != null){
        if (pt.val >= x){
            ptA.next = pt
            ptA = ptA.next
        } else {
            ptB.next = pt
            ptB = ptB.next
        }
        pt = pt.next
    }

    ptB.next = andAbove.next
    ptA.next = null

    return below.next
};
