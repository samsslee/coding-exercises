/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //base cases
    if (head == null || head.next == null){return head}
    if (k == 0){return head}

    //figure out where the tail is and connect it to the start
    let count = 1
    let curr = head

    while (curr.next !=null){
        curr = curr.next
        count++
    }

    //find the new head via modulo
    let trueRot = k % count

    if(trueRot != 0){
        curr.next = head
        let newprev = count - trueRot
        let step = 1

        while(step<=newprev){
            curr = curr.next
            step++
        }
        head = curr.next
        curr.next = null
    }
    return head

};