/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    //basically, you're looping through both A and b
    //the A line goes through as first, then goes through B
    //the B line goes through B first, then goes through A
    //they should reach the intersection point at the same time on their "second" loop
    
    if (headA == null || headB == null){return null}

    let ptA = headA
    let ptB = headB

    while (ptA != ptB){
        ptA = ptA == null ? headB : ptA.next
        ptB = ptB == null ? headA : ptB.next
    }

    return ptA
}